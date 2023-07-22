import React from 'react';
import Product from './Product'


export default function ProductList(props) { //directly using props
//export default function ProductList({product}) //using restructure method by returning array
    //console.log(props)
    //console.log(product)
  return (
    props.productList.length > 0 ? //if length is greater than 0 use map function
    // Loop by mapping
    //returning props of product list we created
    props.productList.map((product, i)=>{ //In map their will be one product which will pass into Product components
        return <Product product={product} key = {i} incrementQuantity ={props.incrementQuantity} index={i} decrementQuantity ={props.decrementQuantity} removeItem={props.removeItem}/>
    })
    : <h1>No Products Exist in the Cart</h1> //else return this error
    
  )
}
