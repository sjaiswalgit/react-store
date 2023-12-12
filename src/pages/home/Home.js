import React,{useEffect} from 'react'
import styles from './index.module.css'
import pic1 from '../../Images/electronics.jpeg'
import pic2 from '../../Images/jewelery.jpeg'
import pic3 from "../../Images/men's clothing.jpeg"
import pic4 from "../../Images/women's clothing.jpeg"
import Footer from '../../components/Footer/Footer'
const Home = () => {
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div className={styles.home} >
        <div className={styles.bgpic}></div>
        <div className={styles.categoryContainer}>
            <div className={styles.categoryTitle}>
               <div></div>
               <h1>Our Categories</h1>
               <div></div> 
            </div>
            <p>Find some the of most awesome products just at a click</p>
            <div className={styles.categoryBox}>
            <figure>
            <img src={pic3} alt="" width="100%" className={styles.catImage} />
            <figcaption>Men's Wear</figcaption>
            </figure>
            <figure>
            <img src={pic4} alt="" width="100%" className={styles.catImage}/>
            <figcaption>Women's Wear</figcaption>
            </figure>
            <figure>
            <img src={pic2} alt="" width="100%" className={styles.catImage}/>
            <figcaption>Jewelery</figcaption>
            </figure>
            <figure>
            <img src={pic1} alt="" width="100%"className={styles.catImage}/>
            <figcaption>Electronics</figcaption>
            </figure>
            </div>
            <div className={styles.shopbutton}>Shop Now</div>
        </div>
        <Footer />
    </div>
  )
}

export default Home