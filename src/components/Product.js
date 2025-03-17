import React from 'react';

const Product = ({product}) => {

    const { id, name, price } = product;

    const buy = id => {
        console.log(id);
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
