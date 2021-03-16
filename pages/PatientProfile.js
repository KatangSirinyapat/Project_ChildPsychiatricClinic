import styles from "../styles/PatientProfile.module.css"
import titlestyle from "../styles/title.module.css"
import { Row, Col } from "reactstrap";

const PatientProfile = () => {
    const renderPatientProfile = () => {
        return (
        <div className = {titlestyle.container}>
        
            <div className = {titlestyle.NameHead}>
                <p>Patient Profile</p>
            </div>

            <div className = {titlestyle.hnSearchbar}>
                <p className = {titlestyle.hn}>HN :</p>
                <input className = {titlestyle.hnSearch} type="text" placeholder="Hospital Number" name="search2" />
                <button className = {titlestyle.edit}>แก้ไข</button>
                <button className = {titlestyle.save}>บันทึก</button>
            </div><br/>

            <div>
                <button className = {styles.tablinks}>ประวัติส่วนตัว1</button>
                <button className = {styles.tablinks}>ประวัติส่วนตัว2</button>
                <button className = {styles.tablinks}>ประวัติการเจ็บป่วยทางกาย / ทางจิต / การใช้สารเสพติด</button>
                <button className = {styles.tablinks}>ประวัติโรงเรียน</button>
                <button className = {styles.tablinks}>ประวัติครอบครัว</button>
                <button className = {styles.tablinks}>ข้อมูลการตรวจ และ การวินิจฉัย</button>
            </div>
                <div id="PP1" className = {styles.tabcontent}>
                    <label >เลขแฟ้ม</label>
                    <input className = {styles.text} type="text" id="text" name="text" />
                    <label >HN</label>
                    <input className = {styles.text} type="text" id="text" name="text" />
                    <label >บัตรประจำตัวประชาชน</label>
                    <input className = {styles.text} type="text" id="text" name="text" /><br/>
                    <label >ชื่อผู้ป่วย</label>
                    <select className = {styles.titlename} name="titlename" id="titlename"/>
                    <input className = {styles.text} type="text" id="text" name="text" />
                    <label >นามสกุลผู้ป่วย</label>
                    <input className = {styles.text} type="text" id="text" name="text" />
                    <label >ชื่อเล่น</label>
                    <input className = {styles.nickname} type="text" id="text" name="text" /><br/>
                    <label >วัน/เดือน/ปีเกิด</label>
                    <input className = {styles.date} type="date" id="text" name="text" />
                    <label >อายุ</label>
                    <input className = {styles.age} type="text" id="text" name="text" />
                    <label >ปี</label>
                    <input className = {styles.age} type="text" id="text" name="text" />
                    <label >เดือน</label> <br/>
                    <label >ศาสนา</label>
                    <input className = {styles.checkbox} type="checkbox" id="text" name="text" />
                        <label >พุทธ</label>
                    <input className = {styles.checkbox} type="checkbox" id="text" name="text" />
                        <label >อิสลาม</label>
                    <input className = {styles.checkbox} type="checkbox" id="text" name="text" />
                        <label >คริสต์</label>
                    <input className = {styles.checkbox} type="checkbox" id="text" name="text" />
                        <label >อื่น ๆ</label>
                        <input className = {styles.checkbox2} type="text" id="text" name="text" />
                    <label >เพศ</label>
                    <select className = {styles.gender} type="text" id="text" name="text" />
                    <label >เบอร์โทรศัพท์</label>
                    <input className = {styles.text} type="text" id="text" name="text" /><br/>
                    <label >ที่อยู่</label>
                        <label > บ้านเลขที่</label>
                        <input className = {styles.address} type="text" id="text" name="text" />
                        <label >หมู่</label>
                        <input className = {styles.address} type="text" id="text" name="text" />
                        <label >ตรอก/ซอก/ซอย</label>
                        <input className = {styles.address} type="text" id="text" name="text" />
                        <label >ตำบล</label>
                        <input className = {styles.address} type="text" id="text" name="text" />
                        <label >อำเภอ</label>
                        <input className = {styles.address} type="text" id="text" name="text" /><br/>
                        <label >จังหวัด</label>
                        <input className = {styles.address} type="text" id="text" name="text" />
                        <label >รหัสไปรษณีย์</label>
                        <input className = {styles.address} type="text" id="text" name="text" />
                    <label >โรงเรียน</label>
                    <input className = {styles.text} type="text" id="text" name="text" />
                    <label >ระดับชั้น</label>
                    <select className = {styles.text} type="text" id="text" name="text" /><br/>
                    <label >การมาพบแพทย์</label>
                        <input className = {styles.checkbox} type="checkbox" id="text" name="text" />
                        <label >มาเอง ผู้พาผู้ป่วยมา</label>
                        <input className = {styles.text} type="text" id="text" name="text" />
                        <input className = {styles.checkbox} type="checkbox" id="text" name="text" />
                        <label >ส่งต่อจาก</label>
                        <input className = {styles.text} type="text" id="text" name="text" />
                </div>
        </div>
    
        )
    
}

        return (
            renderPatientProfile() 
        )
 
} 
  
    export default PatientProfile
