import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import ProductStyle from '../Components/Product/productStyle.module.css';
import { CartContext } from '../Store/CartContext';

export default function Product() { 
    const params= useParams();
    const [product, setProduct]= useState(false);
    const cart= useContext(CartContext);

    async function productDetailsUrl() {
        const {data}= await axios.get(`https://fakestoreapi.com/products/${params.productId}`);
        setProduct(data);
    }

    console.log(params);
    useEffect(()=>{
        productDetailsUrl();
    },[]);
    
  return <>
    <div className="container">
        <div className={ProductStyle.product}>
            <div className="row">
                {product ? <>
                    <div className="col-lg-4">
                        <div className="product-img">
                            <img className='img-fluid' src={product.image} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="product-info">             
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                            <p> <span>$ {product.price}</span> </p>
                            <Link onClick={()=> cart.addToCart(product)}>Add to cart</Link>
                        </div>
                    </div></>

                : <h3>Loading...</h3>
                }
                
            </div>
        </div>
       
    </div>
  </>
}
