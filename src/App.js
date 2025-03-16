import React, { Fragment, useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const date = new Date().getFullYear();
  const title = 'Virtual Store';

  const [products, setProducts] = useState([
    {id:1, name: 'Grape', price: 50},
    {id:2, name: 'Red Apple', price: 40},
    {id:3, name: 'Banana', price: 30},
    {id:4, name: 'Orange', price: 20},
    {id:5, name: 'Strawberry', price: 10},
    {id:6, name: 'Watermelon', price: 5},
  ]);

  return (
    <Fragment>
      <Header 
        title={title}
      />

      <Footer 
        date={date}
      />
    </Fragment>
  );
}

export default App;
