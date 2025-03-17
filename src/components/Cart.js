import React, { Fragment } from 'react';
import Product from './Product';

const Cart = ({cart, setCart}) => {
    return ( 
        <Fragment>
            <h2>Shopping Cart</h2>
            {cart.map(product => (
                <Product 
                    key={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                />
            ))}        
        </Fragment>
        
     );
}
 
export default Cart;