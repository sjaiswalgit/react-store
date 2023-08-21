import React, { useState } from 'react'
import styles from './Filter.module.css'
const Filter = () => {
    const  [category,setcategory]=useState(false);
    const  [price,setprice]=useState(false);
    const  [sort,setsort]=useState(false);

    console.log(category)
  return (
    <div className={styles.filter}> 
        <div className={styles.filtertitle}>Filter By</div>
        <div className={styles.filtercat} onClick={()=>{setcategory(true)}}>Categories<span>{(category)?<span onClick={(e)=>{e.stopPropagation();setcategory(false)}}>-</span>:<span>+</span>}</span>
        <div className={(category)?styles.cartitem:styles.notdisplay}>
        <div className={styles.item}>Electronics</div>
        <div className={styles.item}>Electronics</div>
        <div className={styles.item}>Electronics</div>
        <div className={styles.item}>Electronics</div>   
        </div>
        </div>
        <div className={styles.filtercat} onClick={()=>{setprice(true)}}>Price<span>{(price)?<span  onClick={(e)=>{e.stopPropagation();setprice(false)}}>-</span>:<span>+</span>}</span>
        <div className={(price)?styles.cartitem:styles.notdisplay}>
        <input type="range" max="700" className={styles.pricerange}/>  
        </div>
        </div>
        <div className={styles.filtercat} onClick={()=>{setsort(true)}}>Sort<span>{(sort)?<span onClick={(e)=>{e.stopPropagation();setsort(false)}}>-</span>:<span>+</span>}</span>
        <div className={(sort)?styles.cartitem:styles.notdisplay}>
        <div className={styles.sortitem}>
        <input type="radio" id="price" name="sorting" />
        <label for="price"> Price</label> </div>
        <div className={styles.sortitem}>
        <input type="radio" id="rating" name="sorting"/>
        <label for="rating"> Rating</label> </div>   
        </div>
        </div>
    </div>
  )
}

export default Filter