import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const date = new Date().getFullYear();
  const title = "Virtual Store";

  const [products, setProducts] = useState([
    { id: 1, name: "Grape", price: 50 },
    { id: 2, name: "Red Apple", price: 40 },
    { id: 3, name: "Banana", price: 30 },
    { id: 4, name: "Orange", price: 20 },
    { id: 5, name: "Strawberry", price: 10 },
    { id: 6, name: "Watermelon", price: 5 },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <div className="container">
      <div className="row">
        <div className="eight columns">
          <Header title={title} />

          <h2>Products List</h2>
          {products.map((product) => (
            <Product 
              key={product.id} 
              product={product}
              products={products}
              cart={cart}
              setCart={setCart}
            />
          ))}

          <Footer 
            date={date} 
          />
        </div>
        <div className="four columns">
          <Cart 
            cart={cart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
