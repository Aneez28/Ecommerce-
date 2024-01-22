import React from 'react';

import { Outlet } from "react-router-dom";

export default function Rootlayout() {
   return (
     <>
      <header>
    <span>Shopkart</span>
      <nav> 
        <ul className='navList'>
          <li>
            <a href='./'>Home</a>
          </li>
          <li>
            <a href='./About'>About</a>
          </li>
          <li>
            <a href='./Categories'>Categories</a>
          </li>
        </ul>
      </nav>
      <div className='navIcon'>
      <img src='/icons/cart.svg' alt=''></img>
      <img src='/icons/accont.svg' alt=''></img>
      </div>
    </header>
    <Outlet/>
    <footer></footer>
     </>
   );
}