import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            products.map(products =>{
              return (
              <Link to={'/'+products._id}>
              <li key={products.id} className='product' >
              <img src={products.images[0].url1} alt=""></img>
              <span>{products.title}</span>
              <span>&#8377; {products.price}</span>    
              </li>
              </Link>
            )
          })
        }
        
         </ul>
         </div>
      </sections>
  </>
      );
    }