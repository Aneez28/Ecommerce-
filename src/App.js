import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([])

  useEffect (()=>{
    fetch('http://localhost:3001/products')
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data)
    })
  },[])
  
  return (
    <>
    <header>
    <span>Shopkart</span>
      <nav> 
        <ul className='navList'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
        </ul>
      </nav>
      <div classname='navIcon'>
      <img src='/icons/cart.svg'></img>
      <img src='/icons/accont.svg'></img>
      </div>
    </header>
    <main>
      <sections>
      <div className='container'>
        <h2>Recomended products</h2>
        <ul className='productList'>
          {
            products.map(products =>
              <li key={products.id} className='product' >
              <img src={products.variants[0].images[0].url} alt=""></img>
              <h3>{products.title}</h3>
              <span>&#8377; {products.mrp}</span> 
              </li>
            )
          }
         </ul>
         </div>
      </sections>
    </main>
    <footer></footer>
    </>

  );
}

export default App;
