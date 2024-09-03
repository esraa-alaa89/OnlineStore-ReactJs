import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ProductStyle from '../Product/productStyle.module.css';
import { CartContext } from '../../Store/CartContext';

export default function SingleProduct({product}) {
  const cart= useContext(CartContext);

  return <>
    <div className="col-lg-4">
      <div className={ProductStyle.product}>
        <img className='img-fluid' src={product.image} alt="" />
        <h4>{product.title.slice(0,20)}</h4>
        <p>{`${product.description.slice(0,50)}...`}</p>
        <p>
          <span>$ {product.price}</span>
        </p>
        <Link to={`/products/${product.id}`}>Show details</Link>
        <Link onClick={()=>cart.addToCart(product)}>Add to cart</Link>
      </div>
    </div>
  </>
}
