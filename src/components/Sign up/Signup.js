import React from 'react'
import styles from '../Sign up/signup.module.css'
function Signup() {
return (
    <div>
        <div className={styles.signup}>
            <div className={styles.card}>
                <h6>Welcome</h6>
                <label>Name</label><br/>
                <input type="text" /><br/>
                <label>Email</label><br/>
                <input type="text" /><br/>
                <label>Password</label><br/>
                <input type="password" /><br/>
                <label>Conform Password</label><br/>
                <input type="password" /><br/>
                <div className={styles.button}>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Signup
