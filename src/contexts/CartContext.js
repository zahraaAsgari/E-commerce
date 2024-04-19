import React ,{createContext,useEffect,useState}from 'react';
export const CartContext=createContext();

const CartProvider = ({children}) => {
  
 const[cart,setCart]=useState([]);
 const[itemAmount,setItemAmount]=useState(0);
 const[total,setTotal]=useState(0);


//adding item function
 const addToCart=(id,product)=>{
const newItem={...product, amount:1};
//check if the item is already in the cart
const cartItem=cart.find(item=>{
  return item.id === id;
});
if(cartItem){
  const newCart=[...cart].map(item=>{
    if(item.id===id){
      return{...item,amount:item.amount +1}
    }else{
      return item;
    }
  });
  setCart(newCart);
}else{
setCart([...cart,newItem]);
}

 };
 //clear each item
 const handleItemClose=(id)=>{
  const newCart=cart.filter(item=>{
    return item.id !==id;
  
  });
  setCart(newCart);
 
 }
//clear whole cart function
 const clearCart=()=>{
  setCart([]);
 }

 //maximize item amount
 const increaseAmount=(id)=>{

const item=cart.find(item=> item.id===id);
addToCart(item.id);

 }
//minus item amount
 const decreaseAmount =(id)=>{
  const newItem=cart.find((item)=> {
    return item.id===id
  });
  if(newItem){
    const newCart=cart.map((item)=>{
      if(item.id===id){
        return {...item,amount:newItem.amount-1}
      }else{
        return item;
      }
  
    });
    setCart(newCart);
  }if(newItem.amount<2){
      handleItemClose(id) ;
  }
    

 }
 //calculate item amount
 useEffect(()=>{
 if(cart){
  const amount=cart.reduce((accumulator,currentItem)=>{
    return accumulator + currentItem.amount;
  },0);
  setItemAmount(amount);
 }

 },[cart]);

//calculate total price
 useEffect(()=>{
const total=cart.reduce((accumulator,currentItem)=>{
  return accumulator + currentItem.price *currentItem.amount;
},0)
setTotal(total);

 },[cart]);

  return (
    <CartContext.Provider value={{addToCart,cart,clearCart,increaseAmount,decreaseAmount
      ,handleItemClose,itemAmount,total,}}>{children}</CartContext.Provider>
  )
}

export default CartProvider;