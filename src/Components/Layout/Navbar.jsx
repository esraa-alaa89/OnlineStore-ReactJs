import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../Store/CartContext';

export default function Navbar() {
  const cart= useContext(CartContext);
  
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/home">Home</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        Cart <span className='badge bg-warning'>{cart.count}</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
   </nav>
  </>
}
