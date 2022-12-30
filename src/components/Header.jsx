import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const Location = useLocation()
    const Navigate = useNavigate()
    function PathMathRoute(route){
if(route === Location.pathname){
    return true
}
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
                 alt='logo' className='h-5 cursor-pointer ' onClick={()=>Navigate("/Home")}/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li onClick={()=>Navigate("/ ")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
                    border-b-[3px] border-b-transparent ${PathMathRoute("/") && " text-black border-b-red-500"}`}>Home</li>
                    <li onClick={()=>Navigate("/Offer")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
                    border-b-[3px] border-b-transparent ${PathMathRoute("/Offer") && " text-black border-b-red-500"}`}>Offers</li>
                    <li onClick={()=>Navigate("/Signin")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
                    border-b-[3px] border-b-transparent ${PathMathRoute("/Signin") && " text-black border-b-red-500"}`}>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
