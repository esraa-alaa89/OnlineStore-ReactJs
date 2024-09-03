import React, {useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import axios from 'axios';

export default function Products() {
  const [products, setProducts]= useState([]);
  async function getProductsUrl() {
    let {data}= await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    setProducts(data);
  }

  useEffect(()=>{
    getProductsUrl();
  }, [])
  
  return (
    <div className='container'>
      <div className='row g-lg-3'>
        {!products.length ? <h2>Loading...</h2> : products.map(product=> 
          <SingleProduct product={product} key={product.id} />
        )}
      </div>
    </div>
  )
}
