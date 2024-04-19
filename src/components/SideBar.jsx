import React,{useContext} from 'react';
//import SideBarContext
import { SideBarContext } from '../contexts/SideBarContext';
//import cartContext
import { CartContext } from '../contexts/CartContext';

//import react-icons
import {IoMdArrowRoundForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
//import cartItem
import CartItem from './CartItem';


const SideBar = () => {
  const {isOpen,handleClose}=useContext(SideBarContext);
const{cart,clearCart,total,itemAmount}=useContext(CartContext);

  return (
   
      <div className={`${isOpen ? 'right-0' : '-right-full'}  w-full fixed top-0 -right-full px-3 bg-white h-full md:w-[50vw] lg:max-w-[40vw] transition-all duration-300 z-20 py-4 `}>
        <div className='flex justify-between items-center gap-3 border-b'>
          <div className='uppercase text-gray-600 font-semibold'>shopping cart ({itemAmount})</div>
          <div onClick={handleClose} className='w-8 h-8 cursor-pointer flex justify-center items-center'>
          <IoMdArrowRoundForward className='text-2xl '/>
          </div>
        </div>
        <div className=' flex flex-col gap-y-2 h-[500px] lg:h-[480px] overflow-y-auto overflow-x-auto px-2 border-b '>
          {cart.map(item=>{
            return(
             <CartItem item={item} key={item.id}/>
            )
          })}
        </div>
        <div className='flex py-2 my-2 justify-between gap-y-2 items-center mx-1'>
        <div className='flex'>
          <div className='uppercase px-2'><span className='font-semibold'>total:</span>{" "}${parseFloat(total).toFixed(2)}</div>
        </div>
        <div className='text-lg w-10 h-10 flex justify-center items-center text-white rounded-md transition-all duration-300 bg-red-700 font-bold' onClick={clearCart}><FiTrash2/></div>
        </div>
        
           <div className='flex flex-col items-center justify-center gap-3'>
           <button className='bg-gray-700 text-white rounded-sm min-w-[450px] lg:min-w-[500px] mx-2 p-2 text-sm md:min-w-[350px]'>View Cart</button>
            <button className='rounded-sm min-w-[450px] md:min-w-[350px] mx-2 p-2 text-sm text-gray-800 border border-gray-400 lg:min-w-[500px]'>Checkout</button>
           </div>
        
      </div>
    
  )
}

export default SideBar;