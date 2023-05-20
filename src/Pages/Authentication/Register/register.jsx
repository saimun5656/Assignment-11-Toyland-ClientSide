import {  useContext, useState } from 'react';
import { FcOk } from "react-icons/fc";
import {MdOutlineMailLock } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";
import { BsFillPersonCheckFill, BsPersonBoundingBox} from "react-icons/bs";
import { AuthContext } from '../../../Shared/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Register = () => {
    const{createUser,}=useContext(AuthContext);
    const [error,setError]=useState('');
    const [success,setSuccess] = useState('')
    const handleSubmit=(event)=>{
     setError('');
     setSuccess('')
     event.preventDefault();
     const form =event.target;
     const name =form.name.value;
     const email =form.email.value;
     const photo =form.photo.value;
     const password =form.password.value;
     createUser(email,password)
     .then(data=>{
        updateProfile(data.user,{displayName:name,photoURL:photo})
        console.log(data.user);
        setSuccess('USER created successfully')
     })
     .catch(err=>{
        setError(err.message);
        console.log(err);
    })
     console.log(name,email,password,photo);
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
        <div className='min-h-screen flex justify-center items-center'>
            <div className="hero  mb-10 max-w-5xl mx-auto shadow-lg p-5 rounded-md">
        <div className="flex flex-col lg:flex-row">
          <div className="text-center w-full lg:text-left">
            <img src="https://i.ibb.co/zRhw7tn/20547283-6310507.jpg" alt="" />
          </div>
          <div className="w-full">
          <h1 className="text-5xl font-bold mb-3">Create an Account </h1>
           <p>To keep connected with us Please create an Account with your personal information</p>
            <form onSubmit={handleSubmit} className=" gap-y-0 mt-8">
              <div className="flex justify-start items-center bg-gray-200 px-4 py-2 rounded-t-md gap-x-8">
                <p className='text-3xl'><MdOutlineMailLock></MdOutlineMailLock></p>
                <label className="grow">
                  <p className="label-text">Email Address</p>
                  <input onKeyUp={valid} type="email" placeholder="email" className="input border-0 px-0 h-8" name='email'/>
                </label>
                <p>
                {
                  validEmail?<FcOk className='text-3xl'></FcOk>:''
                }
                </p>
              </div>
              <div className=" shadow-md  rounded-b-md ">
                
               <div className='flex justify-start items-center gap-x-8  px-4 py-2 border-b-2'>
               <p className='text-3xl'><BsFillPersonCheckFill/></p>
                <div className="">
                  <p className="label-text">Name</p>
                  <input  type="text" placeholder="Your Name" className="input border-0 px-0 h-8" required name='name'/>
                </div>
               </div>
               <div className='flex justify-start items-center gap-x-8  px-4 py-2 border-b-2'>
               <p className='text-3xl'><BsPersonBoundingBox/></p>
                <div className="">
                  <p className="label-text">Photo</p>
                  <input  type="text" placeholder="Photo URL" className="input border-0 px-0 h-8 w-full" required name='photo'/>
                </div>
               </div>
               <div className='flex justify-start items-center gap-x-8  px-4 py-2'>
               <p className='text-3xl'><TfiLock></TfiLock></p>
                <div className="">
                  <p className="label-text">Password</p>
                  <input  type="password" placeholder="*******" className="input border-0 px-0 h-8" required name='password'/>
                </div>
               </div>
               
              </div>
              <h1 className='mt-5 text-red-500 text-xl font-mono'>{error}</h1>
              <h1 className='mt-5 text-green-500 text-xl font-mono'>{success}</h1>
              <h1 className='mt-5  text-xl'>Already have an Account? <span className='hover:text-blue-500'><Link to='/login'>login</Link></span></h1>
              <div className=" mt-6">
                
                <button type='submit' className="btn text-sm text-white btn-primary rounded-[5px] bg-4 shadow-sm border-0">Create  Account</button>
              </div>
            </form>
      
      
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;