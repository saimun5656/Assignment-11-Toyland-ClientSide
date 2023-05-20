import {  useContext, useState } from 'react';
import { FcOk } from "react-icons/fc";
import {MdOutlineMailLock } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Shared/AuthProvider/AuthProvider';
const Login = () => {
    const location = useLocation()
    const navigate =useNavigate()
    const from =location.state?.from||'/'
    const{login,googleSignIn}=useContext(AuthContext);
    const [error,setError]=useState('');
    const [success,setSuccess] = useState('')
    const handleSubmit=(event)=>{
     setError('');
     setSuccess('')
     event.preventDefault();
     const form =event.target;
     const email =form.email.value;
     const password =form.password.value;
     login(email,password)
     .then(data=>{
        console.log(data);
        setSuccess('user login successfull')
        navigate(from)
     })
     .catch(err=>setError(err.message))
    }
    const handleGoogle=()=>{
        googleSignIn()
        .then(()=>navigate(from))
        .catch()
    }
    const [validEmail,setValidEmail]=useState(false)
    const valid =(event)=>{
       console.log(event.target.value);
       if(/(?=. *[@]*[.])/.test(event.target.value)){
          
             setValidEmail(true)
           
       } 
       else setValidEmail(false)
       console.log(validEmail);
}

    return (
<div className="hero min-h-screen mb-10">
  <div className="flex flex-col lg:flex-row">
    <div className="text-center w-full lg:text-left">
      <img src="https://i.ibb.co/zRhw7tn/20547283-6310507.jpg" alt="" />
    </div>
    <div className="w-full">
    <h1 className="text-5xl font-bold mb-3">Welcome Back ):</h1>
     <p>To keep connected with us Please login with your personal information by email and password</p>
      <form onSubmit={handleSubmit} className=" gap-y-0 mt-8">
        <div className="flex justify-start items-center bg-gray-200 px-4 py-2 rounded-t-md gap-x-8">
          <p className='text-3xl'><MdOutlineMailLock></MdOutlineMailLock></p>
          <label className="grow">
            <p className="label-text">Email Address</p>
            <input onKeyUp={valid} type="email" placeholder="email" className="input border-0 px-0 h-8" required name='email'/>
          </label>
          <p>
          {
            validEmail?<FcOk className='text-3xl'></FcOk>:''
          }
          </p>
        </div>
        <div className="flex justify-start items-center shadow-md  px-4 py-2 rounded-b-md gap-x-8">
          <p className='text-3xl'><TfiLock></TfiLock></p>
          <div className="">
            <p className="label-text">Password</p>
            <input  type="password" placeholder="*******" className="input border-0 px-0 h-8" required name='password'/>
          </div>
          
        </div>
        <div className="flex justify-between items-center mt-5">
         <label className="cursor-pointer flex items-center">
            <input type="checkbox" className="me-8 checkbox checked:bg-green-500 checked:border-0 checkbox-xs" />
            <span className="label-text">Remember me</span>
          </label>
          <button>Forgot password?</button>
        </div>
        <div className='mt-5 flex items-center gap-5'>
        <h1>Continue With </h1>
        <button onClick={handleGoogle} className='bg-gray-100 hoverbg-4  p-2 rounded-md shadow-lg'><FcGoogle className='text-xl'/></button>
        </div>
        <h1 className='mt-5 text-red-500 text-xl font-mono'>{error}</h1>
        <h1 className='mt-5 text-green-500 text-xl font-mono'>{success}</h1>
        <div className=" mt-6">
          <button type='submit' className="btn text btn-primary rounded-[5px] me-10 bg-4 shadow-lg text-white">Login now</button>
          <Link to='/signup'><button className="btn text-sm btn-primary rounded-[5px] bg-gray-100 shadow-sm border-0">Create A Account</button></Link> 
        </div>
      </form>


    </div>
  </div>
</div>
    );
};

export default Login;