
import React, { useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import styles from './product.module.css'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
const Product = () => {
  useEffect(()=>{window.scrollTo(0,400)},[])

  return (<div className={styles.product}  >
     <div className={styles.bgpic}></div>
    <div className={styles.productBox}>
      <Filter />
      <Card />
    </div>
    <Footer />
    </div>
  )
}

export default Product