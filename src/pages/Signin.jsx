import React, { useState } from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {  Link,  useNavigate } from 'react-router-dom';
import OAuth from '../components/oAuth';
import { signInWithEmailAndPassword,  getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
export default function SignIn() {
    const [formData, setFormData] = useState({email:"", password:""})
    const [showPassword, setShowPassword] = useState(false)
    const {email, password} = formData;
    const navigate = useNavigate()
    function onChange(e){
        setFormData((prevState) =>({
            ...prevState,
            [e.target.id] : e.target.value
        }))
    }
    
    async function onSubmit(e){
        e.preventDefault()
        try {
           const auth = getAuth() 
           const usercredentials = await signInWithEmailAndPassword(auth,email, password)
           if(usercredentials.user){
            navigate("/")
           }
        } catch (error) {
           toast.error("Sign in failed") 
        }
    }
  return (
    
    <section>
        <div><h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1></div>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
            <img className='w-full rounded' src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357' alt='signin'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
            <form onSubmit={onSubmit} >
                <input className='w-full mb-6 px-4 py-2 text-xl text-gray-700
                 bg-white border-gray-300 rounded transition ease-in-out' 
                 type="email" id='email' value={email} onChange={onChange} placeholder="Email address"/>
                 <div>
                 <input className='w-full px-4 mb-6 py-2 text-xl text-gray-700
                 bg-white border-gray-300 rounded transition ease-in-out' 
                 type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} placeholder="Email address"/>
                 {showPassword ? (<AiFillEyeInvisible onClick={()=> setShowPassword((prevState) => !prevState)}
                  className='absolute right-3 top-3 text-xl cursor-pointer' />) : (<AiFillEye onClick={()=> setShowPassword((prevState) => !prevState)} className='absolute right-3 top-3 text-xl cursor-pointer' />)
                 } 
                 </div>

                 <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg '>
                    <p className='mb-6'>Don't have an account?
                        <Link to="/Signup" className='text-red-600 ml-1 hover:text-red-700 transition duration-200 ease-in-out'>Register</Link>
                    </p>
                    <p> <Link to="/Forgotpassword" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'> Forgot password ?</Link> </p>
                 </div>
                 <button type='submit' className='w-full bg-blue-600 text-white px-7
             py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700
              transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'> Sign in</button>
              <div className='my-4 flex items-center  before:border-t before:border-gray-300 before:flex-1 after:border-t after:border-gray-300 after:flex-1 '>
                <p className='text-center font-semibold mx-4'>OR</p>
              </div>
              <OAuth/>
            </form>
            
              
        </div>
        </div>
    </section>
    
      
    
  )
}
