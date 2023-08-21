import React, { useState } from 'react';
import styles from './auth.module.css';
import Registration from  '../../components/Registration/Registration';
import Login from '../../components/Login/Login';
const Auth = () => {
    const [showlogin,setLoginshow]=useState(true)
  return (
    <div className={styles.auth} >
       { (showlogin)?<Login setLoginshow={setLoginshow}/>:
        <Registration setLoginshow={setLoginshow} />}
    </div>
  )
}

export default Auth