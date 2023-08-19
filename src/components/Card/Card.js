import React, { useEffect, useState } from 'react'
import styles from './card.module.css'
const Card = () => {
const [product,setProduct]= useState([])

async function getPdt()
{try{
    const data=await fetch("https://fakestoreapi.com/products");
    const array=await data.json();
    setProduct(array);
}
  catch(e){
    console.log(e)
  }  
}



useEffect(()=>{
    getPdt();
    console.log(product)
},[])


  return (
    <div className={styles.cardContainer}>
        {product.map((e)=>{return(
        <div className={styles.card}>
        <div className={styles.cardimgbox}>
        <img src={e.image} alt="" className={styles.cardImg} /></div>
        <i className={styles.cardTitle}>{e.title}</i>
        <p className={styles.cardprice}>Rs. {Math.round(e.price)}</p>
        <div className={styles.addTocard}>Add to Card</div>
        </div>)})}
    </div>
  )
}

export default Card