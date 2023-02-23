import React from 'react'
import Header from '../Explore/Components/Header/Header'
import styles from './Register.module.scss'
import { useState } from 'react'

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  return (
    <>
      <Header/>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>User<br></br> Registration</h1>
        </div>
        <div className={styles['form-container']}>
          <form>
            <label>First Name</label><br></br>
            <input type="text"/><br></br>
            <label>Last Name</label><br></br>
            <input type="text"/><br></br>
            <label >Email</label><br></br>
            <input type="email" /><br></br>
            <label>Date of Birth</label><br></br>
            <input type='date'></input><br></br>
            <label >Password</label><br></br>
            <input type="password" /><br></br>
            <label >Re-enter Password</label><br></br>
            <input type="password" /><br></br>
            <input class={styles.submit} type="submit" /><br></br>
          </form>
        </div>
      </div>
    </>


  )
}

export default Register
