import React from 'react'
import styles from './about.module.css'
import Footer from '../../components/Footer/Footer'
const About = () => {
  return (
    <div className={styles.about}>
       <div className={styles.bgpic}></div>
        <div className={styles.aboutContainer}>
            <div className={styles.aboutTitle}>
               <div></div>
               <h1>Years of Trust and Service</h1>
               <div></div> 
            </div>
            <div className={styles.paraCont}>
              <p>At E-Store, we believe that shopping should be an enjoyable and hassle-free experience.
                 Our journey began with a simple idea: to create a platform where customers can find high-quality products at affordable prices,
                  all while enjoying the convenience of online shopping.
                  <br/>
                  <br/>
                  Founded in 2023, our team of dedicated individuals came together with a 
                  shared passion for delivering exceptional service to our valued customers. 
                  Over the years, we've grown from a small startup into a thriving e-commerce platform, serving
                   customers around the world.
                </p>
                <p>
                Our mission is to provide you with a curated selection of products that meet your diverse needs,
                 whether you're looking for the latest fashion trends, innovative tech gadgets, or home essentials.
                  We strive to offer you the best products at the best prices,
                   all backed by our commitment to quality and customer satisfaction.
                   <br/>
                   <br/>
                   We're not just an e-commerce platform; we're a community of shoppers who share a passion
                    for great products and exceptional deals. Connect with us on social media to stay updated
                     on the latest trends, exclusive offers, and much more. Join our newsletter to receive regular 
                     updates and special promotions directly in your inbox.
                </p>
            </div>
</div>
<Footer />
    </div>
  )
}

export default About