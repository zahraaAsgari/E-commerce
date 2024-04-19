import React,{useContext, useEffect, useState} from 'react';
//import SideBarContext
import { SideBarContext } from '../contexts/SideBarContext';
//import CartContext
import { CartContext } from '../contexts/CartContext';
//import react-icons
import {BsBag} from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Header = () => {
const{sideToggle}=useContext(SideBarContext);
const{itemAmount}=useContext(CartContext);
const [isActive,setIsActive]=useState(false);

useEffect(()=>{
window.addEventListener("scroll",()=>{
  window.scrollY >60 ? setIsActive(true): setIsActive(false);
})
},[])

  return (
  <header className={`${isActive ? "bg-white shadow-md py-4 " : "bg-none "} w-full h-auto top-0 right-0 left-0 fixed z-10 transition-all duration-200 py-[10px] px-4`}>
    <div className="container m-auto flex items-center justify-between">
 <Link to={"/"}>    
  <div className='font-bold text-xl'><span className='text-2xl'>E-</span>commerce</div>
  </Link>
      <button onClick={sideToggle} className='text-lg font-semibold relative'><BsBag/>
      <div className='bg-red-500 w-[18px] h-[18px] rounded-full -right-3 -bottom-[13px] flex items-center justify-center absolute text-sm'>{itemAmount}</div></button>
    </div>

  </header>
  )
}

export default Header;
