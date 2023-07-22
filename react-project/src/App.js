import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const productList = [
    //we will pass this product by passing props 'properties'. They are read only you can't change them
    {
      price: 99999,
      name: "Iphone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  let [products, setProductList] = useState(productList); //pasisng an empty array
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    //creating function using arrow if you will write fubction& pass it so you have to dfeine dditiona "this" thing
    let newProductList = [...products]; //using spread ... we copied previous output to new list
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++; //increasing quantity
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList); //updating products list with newone
  };

  const decrementQuantity = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;

    }
    setTotalAmount(newTotalAmount); 
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...products];
    newProductList.map((products)=>{
      products.quantity = 0
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index , 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...products];
    newProductList.push({ //creating new object list using push method
      price: price,
      name: name,
      quantity: 0
    });
    setProductList(newProductList);
  }

  return (
    //<></> or <React.Freagment></React.Freagment> for adding another parent element otherwise it will give error
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/> {/*passing function*/}
        <ProductList
          productList={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />{" "}
        {/*pasisng incrementQuantity*/}
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
