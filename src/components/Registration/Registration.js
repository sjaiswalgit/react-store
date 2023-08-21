import React from 'react'
import styles from './registration.module.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const Registration = (props) => {
  return (
    <div className={styles.form_box}>
        <div className={styles.closebutton}>&#10005;</div>
        <h2>E-Store</h2>
            <div className={styles.form_wrapper}>                
                <span className={styles.form_title}>Register</span>
                <form action="" className={styles.register_form}>
                    <input className={styles.text_input} type="text" placeholder='Enter your name' />
                    <input className={styles.text_input} type="email" placeholder='Email' />
                    <input className={styles.text_input} type="passsword" placeholder='Password' />
                    <input className={styles.file_input} type="file" id="avatar" />
                    <label htmlFor="avatar" className={styles.avatar_box}>
                        <AccountBoxIcon/><span>Add an avatar</span>
                    </label>
                    <button className={styles.button}>Sign Up</button>
                </form>
                <span className={styles.switch_text}>Already a member? <span className={styles.login_link} onClick={()=>props.setLoginshow(true)} > Click Here to login</span></span>
            </div>
        </div>
  )
}

export default Registration