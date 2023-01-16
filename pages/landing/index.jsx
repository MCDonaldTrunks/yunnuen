import React from 'react'
import styles from './landing.module.scss'
import LoginForm from './loginForm.jsx'

function landing() {
  return (
    <div className={styles.maincontainer}>
      
      <div className={styles.header}>
        <button>Register</button>
      
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
