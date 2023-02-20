import React from 'react'
import styles from './Search.module.scss'
import Header from '../Explore/Components/Header/Header'

function SearchResult() {
  return (
    <>
      <Header/>
      <div className={styles['main-container']}>
        
        <label>results for ...</label>
        
      </div>
    </>
  )
}

export default SearchResult;
