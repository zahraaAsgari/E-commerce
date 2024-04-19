import React,{useContext} from 'react';
//import productContext
import {ProductContext} from '../contexts/ProductContext';
//import useParams
import {useParams} from 'react-router-dom';
//import cartContext
import { CartContext } from '../contexts/CartContext';



const ProductDetail = () => {
  const{product}=useContext(ProductContext);
  const{addToCart}=useContext(CartContext);
  const {id}=useParams();
//find specific item
  const itemProduct=product.find((item) => {
    return item.id===parseInt(id);
  });
//distructure product
const{title,image,price,description}=itemProduct;


//chek if there is not product
if(!itemProduct){
  return(
    <div className='h-screen flex items-center justify-center'>
      <div>Loading...</div>
    </div>
  )

}
 
  return (
    <section className='w-full h-screen flex items-center justify-center'>
<div className='container mx-auto'>
  <div className=' border-red-800 xl:py-[120px] rounded-md xl:border-red-800 border xl:border flex flex-col lg:flex-row items-center justify-center lg:gap-[15rem] py-20 lg:py-0'>
    <div className=' max-w-[200px] h-[200px] flex items-center justify-center flex-1 mb-5 lg:mb-0'><img className=
    "max-w-[200px] lg:max-w-[240px]" src={image} alt="" /></div>
    <div className='lg:w-[400px] w-[350px] flex flex-col justify-center lg:items-start items-center gap-2'>
      <h3 className='font-semibold text-center lg:text-start text-lg'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
      <h5 className='text-md text-red-600'>${price}</h5>
     <div  onClick={()=>addToCart(itemProduct.id,itemProduct)} className="p-3 text-sm text-white bg-red-700 rounded-md mt-3 hover:bg-red-500 transition-all duration-200">
     <button>Add To Cart</button>
     </div>
    </div>
  
  </div>
</div>
    </section>
  )
}

export default ProductDetail