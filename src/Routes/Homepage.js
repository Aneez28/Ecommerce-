import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Homepage() {
  const [products, setProducts] = useState([])

  useEffect (()=>{
    fetch('http://localhost:3000/products')
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data)
    })
  },[])
  return (
  <>
  <sections>
      <div className='container'>
        <h2>Recomended products</h2>
        <ul className='productList'>
          {
            products.map(products =>
              <li key={products.id} className='product' >
              <img src={products.images[0].url1} alt=""></img>
              <h3>{products.title}</h3>
              <span>&#8377; {products.price}</span> 
              </li>
            )
          }
         </ul>
         </div>
      </sections>
  </>
      );
    }