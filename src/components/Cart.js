import React, { Fragment } from 'react';
import Product from './Product';

const Carrito = ({cart}) => {
    return ( 
        <Fragment>
            <h2>Shopping Cart</h2>
            {cart.map(product => (
                <Product 
                    key={product.id}
                />
            ))}        
        </Fragment>
        
     );
}
 
export default Carrito;