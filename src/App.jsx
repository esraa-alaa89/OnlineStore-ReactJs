import { useState } from 'react';
import {HashRouter, BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Layout/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import ProductDetails from './Pages/ProductDetails';
import { CartContext } from './Store/CartContext';
import NotFound from './Pages/NotFound';
import Swal from 'sweetalert2';


function App() {

  const [cartItems, setCartItems]= useState([]);
  console.log('cartItems from app page');
  console.log(cartItems);
  

  const [count, setCount]= useState(0);

  // add items into cart page & check about existing items
  function addToCart(product) {
    console.log(cartItems);
    
    
    let checked= cartItems.find((item)=> item.id == product.id);
    console.log('checked is');
    console.log(checked);
    
    if (checked) {
      let newIntemsQuantity= cartItems.map((item) => {
        if (item.id == product.id) {
          item.quantity =item.quantity + 1;
        }
        return item;
      })
      setCartItems([...newIntemsQuantity]);
    }
    else{
      let oldProduct= cartItems; //previous cart item

      // to put all the previous products plus the current product:
      // setCartItem([...oldProduct, product]);

      // to put all products(current & previous) and spread product object to add a key for it:
      setCartItems([...oldProduct, {...product, quantity:1}]);
      setCount(()=>count+1);
    }

    Swal.fire({
      icon: "success",
      title: "Done.",
      text: "Added successfully",
    });
    
  }
  

  return <>  
      <HashRouter>   
        <CartContext.Provider value={
          {cartItems, setCartItems, count, setCount, addToCart}
        }>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:productId' element={<ProductDetails/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </CartContext.Provider>
      </HashRouter>
    </>
}

export default App;
