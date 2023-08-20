import React from 'react'
import styles from './cart.module.css'
import Footer from '../../components/Footer/Footer'
const Cart = () => {
  return (
    <div className={styles.cart}>
    <div className={styles.cartbox}>
        <div className={styles.cartitemcont}>
            <h2 className={styles.mycart}>My Cart</h2>
            <div className={styles.cartitem}>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className={styles.cartimage}/>
            <div className={styles.cartitemdetails}>
                <div>title</div>
                <p>Rs17.00</p>
            </div>
                <div  className={styles.quantity}>
                    <span className={styles.quantadjut}>-</span>
                    <span>7</span>
                    <span className={styles.quantadjut}>+</span>
                </div>
                <div className={styles.totalprice}>Rs38</div>
                <div className={styles.cancle} >&#10005;</div>
            </div>
        </div>
        <div className={styles.orderSummary}> 
            <h2 className={styles.ordertitle}>Order Summary</h2>
            <div className={styles.invoice}>
                <div >Subtotal<span className={styles.amount}>Rs.17.00</span></div>
                <div>Estimated Delivey</div>
            </div>
            <div style={{fontSize:"1.3rem"}} >Total<span className={styles.amount}>Rs.17.00</span></div>
            <button className={styles.checkoutbtn}>Checkout</button>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Cart