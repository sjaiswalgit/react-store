import React from 'react'
import styles from './footer.module.css'
const Footer = () => {


  return (
    <div className={styles.footer}>
    <div className={styles.footertop}>
        <div className={styles.footercontain}>
            <div className={styles.footerdetail}>
                <h1>Get to Know about E-store</h1>
                <p>E-store is design as a project to showcasce web developing skill. This project is being developed using React. </p>
            </div>
            <div className={styles.footerdetail}>
                <i>Help</i>
                <p>FAQ</p>
                <p>Shopping and return</p>
                <p>Return Policy</p>
                <p>Payment Methods</p>
            </div>
            <div className={styles.footerdetail}>
                <i>Follow</i>
                <a>Facebook</a>
                <a>Instagram</a>
                <a>Pinterest</a>
                
            </div>
        </div>
        <div className={styles.footersubscribe}>
            <div className={styles.service}><div style={{borderBottom:"1px solid black"}}>Visit our store</div><div>Customer service: 123-456-7890</div></div>
            <div className={styles.subscribebox}><input type="text" placeholder='Enter email here*' className={styles.subinp}/><div className={styles.subbtn}>Subscribe Now</div></div>
        </div>
    </div>
    <div className={styles.footerbottom}>
    <span>&copy;2023 By E-store designed by Subhash Kumar Jaiswal</span>
    <span>&uarr; Back to top</span>
    </div>
    </div>
  )
}

export default Footer