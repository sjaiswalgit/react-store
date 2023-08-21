import React from 'react'
import styles from './login.module.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const Login = (props) => {
  return (
    <div className={styles.form_box}>
        <div className={styles.closebutton}>&#10005;</div>
        <h2>E-Store</h2>
            <div className={styles.form_wrapper}>                
                <span className={styles.form_title}>Login</span>
                <form action="" className={styles.register_form}>
                    <input className={styles.text_input} type="email" placeholder='Email' />
                    <input className={styles.text_input} type="passsword" placeholder='Password' />
                    <button className={styles.button}>Sign Up</button>
                </form>
                <span className={styles.switch_text}>Not a member? <span className={styles.login_link} onClick={()=>props.setLoginshow(false)}> Click Here to Register</span></span>
            </div>
        </div>
  )
}

export default Login