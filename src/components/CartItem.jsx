import React, { useContext } from 'react';
//import react-icons
import {IoMdRemove,IoMdAdd,IoMdClose} from 'react-icons/io'
//import cartContext
import {CartContext} from '../contexts/CartContext';
//import link
import { Link } from 'react-router-dom';
// import { FiCloudLightning } from 'react-icons/fi';

const CartItem = ({item}) => {
  const{id,image,title,amount,price}=item;
  const {handleItemClose,increaseAmount,decreaseAmount}=useContext(CartContext);
  return ( 
    
      <div className='flex justify-center items-center border-b py-5 w-full border-gray-200 font-light my-1 gap-x-4 '>
        <Link to={`/product/${id}`} className='flex justify-start items-center  max-w-[80px] max-h-[90px]'>
          <img className='object-cover w-full h-full' src={image} alt="cartItem" />
        </Link>
     <div className='mx- flex flex-col w-full'>
     <div className='flex justify-between items-center'>
      <p className='mt-4 w-[280px] xl:w-[200px] text-sm font-semibold text-gray-700'>{title}</p>
     <div className='hover:text-red-700 text-lg font-bold transition-all duration-300' onClick={()=>handleItemClose(id)}><IoMdClose/></div>
     </div>
     <div className='flex gap-5 justify-between items-center mt-5 w-full '>
     <div className='flex items-center justify-between gap-4 rounded-sm border border-[#e4e4e4] w-[90px]'>
     <div onClick={()=>decreaseAmount(id)} className='cursor-pointer ' ><IoMdRemove  />
     </div>
      <div>{amount}</div>
      <div  onClick={()=>increaseAmount(id)} className='cursor-pointer'><IoMdAdd/></div>
     </div>
     <div className='font-semibold text-sm text-gray-600'>${price}</div>
     <div className='font-semibold text-gray-800'>{`$${parseFloat(price * amount).toFixed(2)}`}</div>
     </div>
   
     </div>
   
      </div>
    
  )
}

export default CartItem;