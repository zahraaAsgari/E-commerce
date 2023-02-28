import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import productProvider
import ProductProvider from './contexts/ProductContext';
//import sidebarProvider
import SideBarProvider from './contexts/SideBarContext';
//import CartProvider
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideBarProvider>
<CartProvider>
<ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
</CartProvider>
  </SideBarProvider>
);


reportWebVitals();
