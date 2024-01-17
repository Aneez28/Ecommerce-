import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Categories() {
  const [category, setcategories] = useState([])

  useEffect (()=>{
    fetch('http://localhost:3000/Categories')
    .then((res)=>res.json())
    .then((data)=>{
      setcategories(data)
    })
  },[])
  return (
  <>
  <sections>
      <div className='container'>
        <h2>Categories</h2>
        <ul className='productList'>
          {
            category.map(category =>
              <li key={category.id} className='product' >
              <h3>{category.title}</h3>
             
              </li>
            )
          }
         </ul>
         </div>
      </sections>
  </>
      );
    }