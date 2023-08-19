import React, { useState } from 'react'
import styles from './Filter.module.css'
const Filter = () => {
    const  [category,setcategory]=useState(false);
    const  [price,setprice]=useState(false);
    const  [sort,setsort]=useState(false);
  return (
    <div className={styles.filter}> 
        <div className={styles.filtertitle}>Filter By</div>
        <div className={styles.filtercat} onClick={()=>{(category)?setcategory(true):setcategory(false)}}>Categories<span>{(category)?<>+</>:<>-</>}</span></div>
        <div className={styles.filtercat} onClick={()=>{(category)?setcategory(true):setcategory(false)}}>Price<span>{(category)?<>+</>:<>-</>}</span></div>
        <div className={styles.filtercat} onClick={()=>{(category)?setcategory(true):setcategory(false)}}>Sort<span>{(category)?<>+</>:<>-</>}</span></div>
    </div>
  )
}

export default Filter