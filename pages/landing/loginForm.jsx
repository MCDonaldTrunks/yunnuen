import { useState } from 'react'
import styles from './landing.module.scss'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            // Make a request to the server to log in the user
            // Replace with your own login logic
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            if (!response.ok) {
                throw new Error(await response.text())
            }

            // Handle successful login
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br />
            <input type="submit" value="Log In" />
        </form>
    )
}

export default LoginForm
