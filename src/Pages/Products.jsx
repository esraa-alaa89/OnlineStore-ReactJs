import React, { useContext } from 'react';
import ProductList from '../Components/Product/ProductList';
import { CartContext } from '../Store/CartContext';
import { PageTitle } from '../Components/Layout/PageTitle';

export default function Products() {
  return (
    <div className='container'>
      <div className="row">
        <ProductList/>
      </div>
    </div>
  )
}
