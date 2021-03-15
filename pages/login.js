import styles from "../styles/login.module.css"


const Login = () => {

    const renderLogin = () => {
        return (
        <div>
            
            <nav className = {styles.title} >
                    <li className = {styles.title_li}>HATYAI  HOSPITAL</li>
                    <li><a className = {`${styles.title_li} ${styles.title_li2} ${styles.topRight1}`} href="#news">LOG IN</a></li> 
                    {/* <hr className = {styles.line2}></hr> */}
                    <li><a className = {`${styles.title_li} ${styles.title_li2} ${styles.topRight2}`} href="#contact">SIGN UP</a></li>  
            </nav>
            
            <div className={styles.container}>
                <div>
                    <div className={styles.loginboxhead}>
                        <h3 >Child Psychiatric Clinic</h3>
                        <hr className={styles.line}></hr>
                        <h3 >User Login</h3>
                    </div>
                    <div className = {styles.login}>
                        <input className = {styles.loginInput} type="text" placeholder="Username" /> <br />
                        <input className = {styles.loginInput} type="password" placeholder="Password" /> <br />
                        <button className = {styles.loginbutton}>LOG IN</button><br />
                        <a href="#" className = {styles.LoginForgot}>Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
            
           
        )
    }


    return (
        renderLogin()
    )
}

export default Login