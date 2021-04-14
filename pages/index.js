import styles from "../styles/Login.module.css"
import Link from 'next/link'

export default function Home() {
  return (
    <div>
            <nav className = {styles.containerbar}>
                    <div className = {styles.title}>HATYAI  HOSPITAL</div>
                    <div className = {styles.containerbar_right}>
                        <div className = {`${styles.barright} ${styles.barright_hover}`}>LOG IN</div> 
                        <div className = {`${styles.barright} ${styles.barright_hover}`}>SIGN UP</div>  
                    </div>   
            </nav>
            
            <div className={styles.container}>
                <div>
                    <div className={styles.loginboxhead}>
                        <h3>Child Psychiatric Clinic</h3>
                        <hr className={styles.line}></hr>
                        <h3>User Login</h3>
                    </div>
                    <div className = {styles.login}>
                        <input className = {styles.loginInput} type="text" placeholder="Username" /> <br />
                        <input className = {styles.loginInput} type="password" placeholder="Password" /> <br />
                      
                        <a href = "/menu"> <button className = {styles.loginbutton}>LOG IN</button></a><br />
                      
                        <a href="#" className = {styles.LoginForgot}>Forgot Password?</a>
                    </div>
                </div>
            </div>
    </div>
  )
}
