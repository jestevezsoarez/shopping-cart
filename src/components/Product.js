import React from 'react';

const Product = ({product, products, cart, setCart}) => {

    const { id, name, price } = product;

    const buy = id => {
        const product = products.filter(product => product.id === id)[0];
        setCart([
            ...cart,
            product
        ]);
    }

    return ( 
        <div>
            <h3>{name}</h3>
            <p>$ {price}</p>
            <button
                className='button-primary'
                onClick={() => buy(id)}
            >Buy</button>
        </div>
     );
}
 
export default Product;
