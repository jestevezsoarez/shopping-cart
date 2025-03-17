import React from 'react';

const Product = ({product}) => {

    const { id, name, price } = product;

    return ( 
        <div>
            <h3>{name}</h3>
            <p>$ {price}</p>
            <button
                className='button-primary'
            >Buy</button>
        </div>
     );
}
 
export default Product;
