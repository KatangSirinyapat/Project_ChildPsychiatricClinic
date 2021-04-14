import styles from "../styles/Menu.module.css"
import Link from 'next/link'
import Bar from "../components/bar"

const Menu = () => {
    const renderMenu = () => {
        return (
            <div className = {styles.container}>
                <Bar />
                <div>
                    <input className = {styles.search} type="text" placeholder="Search.." name="search" />
                    {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                </div>

                <div className = {styles.bodycontainer}>
                    <div className = {styles.news}>
                        news
                    </div>
                    <div className = {styles.containerbutton}>
                        <Link href = "/newpatientprofile">
                            <button className = {styles.button} >ลงทะเบียนผู้ป่วยใหม่</button>
                        </Link>

                        <Link href = "/patientprofile">
                            <button className = {styles.button}>Patient Profile</button>
                        </Link>

                        <Link href = "/visitrecord">
                            <button className = {styles.button}>Visit Record</button>
                        </Link>

                        <Link href = "/record">
                            <button className = {styles.button}>บันทึกการตรวจ</button>
                        </Link>

                        <Link href = "/meeting">
                            <button className = {styles.button}>การนัดหมายผู้ป่วย</button>
                        </Link>

                        <Link href = "/checkmeeting">
                            <button className = {styles.button}>ตรวจสอบการนัดหมาย</button>
                        </Link>
                        
                        <Link href = "/">
                            <button className = {`${styles.button} ${styles.loginbutton}`}>LOG OUT</button>
                        </Link>
                    </div>
                </div>

                <footer className = {styles.footer}>
                    <p>ที่อยู่</p>
                    <p>โทร</p>
                    <p>Child Psychiatric Clinic</p>
                </footer>
            </div>

            
    )    
}
    return (
        renderMenu() 
    )
}

export default Menu