import styles from "../styles/Menu.module.css"

const Menu = () => {
    const renderMenu = () => {
        return (
            <div className = {styles.container}>
                <div>
                    <input className = {styles.search} type="text" placeholder="Search.." name="search" />
                    {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                </div>
             

                <dev className = {styles.buttonname}>
                    <button className = {styles.button}>ลงทะเบียนผู้ป่วยใหม่</button>
                    <button className = {styles.button}>Patient Profile</button>
                    <button className = {styles.button}>Visit Record</button>
                    <button className = {styles.button}>บันทึกการตรวจ</button>
                    <button className = {styles.button}>การนัดหมายผู้ป่วย</button>
                    <button className = {styles.button}>ตรวจสอบการนัดหมาย</button>
                    <button className = {`${styles.button} ${styles.loginbutton}`}>LOG OUT</button>
                </dev>
                <footer className = {styles.footer}>
                    <p>kkk</p>
                </footer>
            </div>

            
    )    
}
    return (
        renderMenu() 
    )
}

export default Menu