import React from 'react'
import styles from './contact.module.css'
import Footer from '../../components/Footer/Footer'
const Contact = () => {
  return (
    <div className={styles.contact} >
      <div className={styles.bgpic}></div>
      <div className={styles.contactContainer}>
            <div className={styles.contactTitle}>
               <div></div>
               <h1>You're Welcome to Visit</h1>
               <div></div> 
            </div>
            <div className={styles.contactarea}>
              <div>Have a Question? We're Here to Help</div>
              <p>Email us at subhashkjaiswal333@gmail.com or send us a message via the contact form below and we'll get back to you</p>
              <form className={styles.contactForm}>
               <div className={styles.contactdetails}>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/></div>
                <textarea />
                <button type='sumit'>Submit</button>
              </form>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact