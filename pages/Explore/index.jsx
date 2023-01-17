import React from 'react'
import styles from './Explore.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import logo from '../src/logo.png'

function Explore() {
  return (
    <div className={styles['main-container']}>
      <div className={styles.header}>
        <div className={styles['logo-container']}>
          <Image className={styles.logo} src={logo}/>
        </div>
        <div className={styles["main-search"]}>
          <input type='text'></input>
          <div className={styles["search-icon-container"]}>
            <SearchIcon className={styles['']}/>
          </div>
        </div>
        <div className={styles['header-button-container']}>
          <div>Register</div>
          <a href='/Explore'>
            <div>Log In</div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Explore
