import React from 'react';
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const res = await fetch ("http://localhost:3000/products/"+params.productsid);
    const product = await res.json()
    return { product };
  }
  
  
export default function Productpage() {
    const { product } = useLoaderData();
    console.log(product)
    return(
        <>
        <main>
            <img src={product.images[0].url2} alt=""></img>
            <div>
            <h1>{product.title}</h1>
            <span>{product.price}</span>
            </div>
            
        </main>

        </>
    );
  }