import {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';

//import components
import Products from '../components/Products';
import Hero from '../components/Hero';

const Home = () => {
  const{product}=useContext(ProductContext);
  
//get just men and women products
const filteredProducts = product.filter((item)=>{
  return(
    item.category=== 
"men's clothing" || item.category===
"women's clothing" 
  );
});
  return (
   <div>
   <Hero/>
     <section className='py-4'>
    <div className='container mx-auto'>
     <div className='grid grid-col-1 xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-sm mx-auto md:max-w-none md:mx-0'>
     {filteredProducts.map((product) =>{
        return(
       <Products product={product} key={product.id} />
       )})}
     </div>
    </div>

    </section>
   </div>
  )
}

export default Home;