import React from 'react'
import styles from './landing.module.scss'
import LoginForm from './loginForm.jsx'
import Image from 'next/image'
import logo from '../src/logo.png'


function landing() {
  return (
    <div className={styles.maincontainer}>
      
      <div className={styles.header}>
        <div className={styles['logo-container']}>
          <Image className={styles.logo} src={logo}/>
        </div>
        <div className={styles['header-button-container']}>
          <div>Register</div>
          <a href='/Explore'>
            <div>Explore</div>
          </a>
        </div>
      
      </div>
      <div className={styles['main-content']}>
        <div className={styles['form-container']}>
          <LoginForm/>
          
        </div>
        <div className= {styles['front-text']}>
          <h1>Feel Free to shop spree on your feet or computer machine</h1>

        </div>
      </div>
        
      
    </div>
  )
}

export default landing
