import React, { useContext } from 'react'
import ProductStyle from '../Components/Product/productStyle.module.css';
import { PageTitle } from '../Components/Layout/PageTitle';
import Swal from 'sweetalert2';
import { CartContext } from '../Store/CartContext';

export default function Cart() {
  const cart= useContext(CartContext);
  console.log('cartItems from cart');
  console.log(cart.cartItems);
  

  // delete item from cart page
  function deleteItem(id) {
    console.log(`is is ${id}`);
    const newCartItems= cart.cartItems.filter((cartItem) => cartItem.id !== id);
    console.log(newCartItems);
    
    cart.setCartItems([...newCartItems]);

    Swal.fire({
      title: "Are you sure?",
      text: "Delete this item from cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Product is deleted!",
          icon: "success"
        });
      }
    });
    cart.setCount(()=>cart.count-1);
  }
  
  return <>
    <section className={ProductStyle.cartSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={ProductStyle.product}>
              <PageTitle title='Cart'/>
            </div>
          </div>
         

          {!cart.cartItems.length ? <h3>No products found</h3> :
            cart.cartItems.map( (cartItem) => { 
              return <div key={cartItem.id} className="col-lg-4">
                <div className={ProductStyle.product}>
                  <div className="cartItem-product">
                    <img className='img-fluid' src={cartItem.image} alt="" />
                    <h4>{cartItem.title}</h4>
                    <p>{cartItem.description}</p>
                    <p> <span>$ {cartItem.price}</span> </p>
                    <p>Quantity: <span>{cartItem.quantity}</span> </p>
                    <button onClick={()=> deleteItem(cartItem.id)}>Delete</button>
                  </div>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </section>
  </>
}
