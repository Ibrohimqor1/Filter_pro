import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { ContextProvider } from "../src/Contex";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <CartProvider>
  <BrowserRouter>
      <App />
      
    </BrowserRouter>

  </CartProvider>
    
  
</ContextProvider>
);

