import React from 'react'
import styles from './Explore.module.scss'
import Banner from './Components/Banner/Banner.jsx'
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx'

function Explore() {
  return (
    <div className={styles['main-container']}>
      <Header/>
      

      <div className={styles['main-content']}>
        <Banner/>
        
        <h2>Content</h2>
        <div className={styles['grid-']}>
          <div className={`${styles['grid-item']} ${styles['grid-item-1']}`}> item 1</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-2']}`}> item 2</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-3']}`}> item 3</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-4']}`}> item 4</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-5']}`}> item 5</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-6']}`}> item 6</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-7']}`}> item 7</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-8']}`}> item 8</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-9']}`}> item 9</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-10']}`}>item 10</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-11']}`}>item 11</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-12']}`}>item 12</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-13']}`}>item 13</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-14']}`}>item 14</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-15']}`}>item 15</div>
          <div className={`${styles['grid-item']} ${styles['grid-item-16']}`}>item 16</div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Explore