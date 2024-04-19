import {useState,useEffect,createContext} from 'react'


export const ProductContext=createContext();

const ProductProvider = ({children}) => {

const[product,setProduct]=useState([]);

useEffect(()=>{
  const getProducts=async()=>{

  const response=await fetch('https://fakestoreapi.com/products');
  const data=await response.json();
  setProduct(data);
  
  }
getProducts();
},[]);
  return (
    <ProductContext.Provider value={{product}}>
{children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;