import React from 'react';

const Product = ({ product, products, cart, setCart }) => {

    const { id, name, price } = product;

    const buy = id => {
        const product = products.filter(product => product.id === id)[0];
        setCart([
            ...cart,
            product
        ]);
    }

    const remove = id => {
        const newProducts = cart.filter(product => product.id !== id);
        setCart(newProducts);
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>$ {price}</p>
            { products ? 
                (
                    <button
                        className='button-primary'
                        onClick={() => buy(id)}
                    >Buy</button>
                ) : 
                (
                    <button
                        className='button secondary'
                        onClick={() => remove(id)}
                    >Remove</button>
                ) 
            }
        </div>
    );
}

export default Product;
