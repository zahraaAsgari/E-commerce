import React,{useContext} from 'react';
//import react-icons
import {BsPlus,BsEyeFill} from 'react-icons/bs'
//import link
import { Link } from 'react-router-dom';
//import cartContext
import { CartContext } from '../contexts/CartContext';

const Products = ({product}) => {
  const{id,title,image,category,price}=product;
const {addToCart}=useContext(CartContext);
 
  return (
  <div className='mt-[35px] max-w-screen'>
      <div  className='border border-]#e4e4e4 h-[300px] relative overflow-hidden transition group mb-3  rounded-lg'>
    <div className='w-full h-full flex justify-center items-center '>
    {/* product image */}
<div className='w-[200px] flex items-center justify-center'>
  <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt="store product" />
</div>
<div className="absolute top-3 -right-14 group-hover:right-3 flex flex-col justify-center items-center p-2 gap-1opacity-0 group-hover:opacity-100 transition-all duraition-300">
<button onClick={()=>addToCart(id,product)}>
<div className="flex justify-center items-center bg-pink-500 w-10 h-10  rounded-sm">
<BsPlus className='text-white text-3xl '/>
</div></button>
<button>

<Link to={`/product/${id}`} className="text-gray-500 bg-white drop-shadow-lg flex items-center justify-center w-10 h-10 rounded-sm">
<BsEyeFill/>
</Link>
</button>
</div>
</div>
</div>
{/* category & title & price */}
<div>
  <div className='font-sm text-gray-500 capitalize mb-1'>{category}</div>
  <h2 className='font-semibold mb-1'><Link to={`/product/${id}`}>{title}</Link></h2>
  <div className='font-semibold text-gray-800'> ${price}</div>
</div>
  </div>
  )
}

export default Products;