import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import logo from '../../../src/logo.png'
import React from 'react'
import styles from './Header.module.scss'

function Header() {
  return (
    <div className={styles.header}>
      
      <div className={styles['logo-container']}>
        <Image className={styles.logo} src={logo}/>
        <h1>Gold Bright Honey</h1>
      </div>
      
      <div className={styles["main-search"]}>
        <input type='text'></input>
        <a href='/Search'>
          <div className={styles["search-icon-container"]}>
            <SearchIcon className={styles['']}/>
          </div>
        </a>
      </div>
      <div className={styles['header-button-container']}>
        <a href='/Register'>
          <div>Register</div>
        </a>
        <a href='/Landing'>
          <div>Log In</div>
        </a>
      </div>

    </div>
    
  )
}

export default Header