/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    const loacation=useLocation()
    if(user){
       return children
    }
    return <Navigate to='/login' state={{from:loacation}}></Navigate>
   
};

export default PrivateRoute;