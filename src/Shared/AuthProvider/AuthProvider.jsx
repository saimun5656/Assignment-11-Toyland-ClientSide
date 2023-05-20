/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth" 
import app from "../../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth =getAuth(app)

const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider();
const [user,setUser] = useState({});
const [loading,setLoading] = useState(true);

useEffect(()=>{
  const unSub = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })
  return ()=>unSub()
},[])

const googleSignIn=()=>{
   return signInWithPopup(auth,googleProvider)
}
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const login = (email,password)=>{
   return signInWithEmailAndPassword(auth,email,password);
}
const logOut =()=>{
  return signOut(auth);
}
const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    login,
    logOut
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;