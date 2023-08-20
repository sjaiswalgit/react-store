import React from 'react'
import styles from './item.module.css'
import Footer from '../../components/Footer/Footer'
const Item = () => {
  return (
    <div className={styles.item}>
        <div className={styles.itemview}>
        <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt=''  className={styles.itemimage}/>
        <div className={styles.itemDetails}>
            <div className={styles.itemTitle}>Chamomile Tea</div>
            <div className={styles.itemprice}>₹45.00</div>
            <p>I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions</p>
            <label for="quantity">Quantity</label>
            <input type="number" min="1" max="5" id="quantity" name="quantity" />
            <button className={styles.Addcart}>Add to Cart</button>
            <button className={styles.Buybtn}>Buy Now</button>
        </div>
        </div>
        <div className={styles.iteminfo}>
            <section><h3>Product Info</h3><p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p></section>
            <section style={{borderLeft:"1px solid grey",borderRight:"1px solid grey"}} ><h3>Return & Refund Policy</h3><p>I’m a return and refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p></section>
            <section><h3>Shipping Info</h3><p>I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.</p></section>
        </div>
            <h2 className={styles.relatedproducttitle}>Related Procduct</h2>
            <div className={styles.relatedproduct}>
                <div className={styles.relatedproductbox}> 
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" /> 
                    <p>Title</p>
                    <hr />
                    <div>₹45</div>
                 </div>
                 <div className={styles.relatedproductbox}> 
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" /> 
                    <p>Title</p>
                    <hr />
                    <div>₹45</div>
                 </div>
                 <div className={styles.relatedproductbox}> 
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" /> 
                    <p>Title</p>
                    <hr />
                    <div>₹45</div>
                 </div>
                 
            </div>
        <Footer />
    </div>
  )
}

export default Item