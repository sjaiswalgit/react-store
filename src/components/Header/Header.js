import React,{useState} from 'react'
import styles from './header.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import { AccountCircle, SearchOutlined, ShoppingBasket } from '@mui/icons-material'
import Auth from '../../pages/Auth/Auth'
import Navbar from '../Navbar/Navbar'
const Header = () => {
  const [authshow,setAuthshow]=useState(false)
  const [navshow,setnavshow]=useState(false)
  return (
    <div className={styles.header}>
       <Navbar setnavshow={setnavshow} navshow={navshow} />
        <div className={styles.potrait}>
          {authshow&&<Auth setAuthshow={setAuthshow}/>}
            <div className={styles.toppart}>
                <div className={styles.searchbox}>
                <SearchOutlined />
                 <input type="text" placeholder='Search...' />
                </div>
                <div className={styles.loginbox}>
                <div className={styles.login} onClick={()=>{setAuthshow(true)}}><AccountCircle fontSize='large'/><span>Log In</span></div>
                <div className={styles.cart} ><ShoppingBasket fontSize='large'/></div>
                </div>
                <div className={styles.toggle} onClick={()=>setnavshow(true)}>
                  <div className={styles.line1}></div>
                  <div className={styles.line1}></div>
                  <div className={styles.line1}></div>
                </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.link}>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.nonactive)}  to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.nonactive)} to="/product">Product</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.nonactive)} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.nonactive)} to="/contact">Contact</NavLink>
              </div>
              <div className={styles.title}><h2 style={{fontWeight:"lighter"}}>E-Store</h2></div>
              <div className={styles.social}>
                <a href="https://www.facebook.com/subhash.jaiswal.9699"><i style={{fontSize:"24px",color:"white"}} className="fa"> &#xf09a; </i></a>
                <a href="https://www.instagram.com/subhash.jaiswal.9699"><i style={{fontSize:"24px",color:"white"}} className="fa">&#xf16d;</i></a>
                <a href="https://www.pinterest.com"><i style={{fontSize:"24px",color:"white"}} className="fa">&#xf0d2;</i></a>
              </div>
            </div>
        </div>
<Outlet />
    </div>
  )
}

export default Header