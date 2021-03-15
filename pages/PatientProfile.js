import styles from "../styles/VisitRecord.module.css"
import styles2 from "../styles/PatientProfile.module.css"

const PatientProfile = () => {
    const renderPatientProfile = () => {
        return (
        <div className = {styles.container}>
                <nav className = {styles.title}>
                    <div className = {styles.head1}>
                        <p>HATYAI HOSPITAL</p>
                        <hr className = {styles.line}></hr>
                        <p>Child Psychiatric Clinic</p>  
                    </div>

                    <hr className = {styles.line2}></hr>
                    
                    <div>
                        <input className = {styles.search} type="text" placeholder="Search.." name="search" />
                        {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                    </div>

                    <hr className = {styles.line2}></hr>
                </nav>

            <div className = {styles.NameHead}>
                <p>Patient Profile</p>
            </div>

            <div className = {styles.hnSearchbar}>
                <p className = {styles.hn}>HN :</p>
                <input className = {styles.hnSearch} type="text" placeholder="Hospital Number" name="search2" />
                <button className = {styles.edit}>แก้ไข</button>
                <button className = {styles.save}>บันทึก</button>
            </div><br/>

            <div>
                <button className = {styles2.tablinks} onclick="openPP(event, 'PP1')">ประวัติส่วนตัว1</button>
                <button className = {styles2.tablinks} onclick="openPP(event, 'PP2')">ประวัติส่วนตัว2</button>
                <button className = {styles2.tablinks} onclick="openPP(event, 'PP3')">ประวัติการเจ็บป่วยทางกาย / ทางจิต / การใช้สารเสพติด</button>
                <button className = {styles2.tablinks} onclick="openPP(event, 'PP4')">ประวัติโรงเรียน</button>
                <button className = {styles2.tablinks} onclick="openPP(event, 'PP5')">ประวัติครอบครัว</button>
                <button className = {styles2.tablinks} onclick="openPP(event, 'PP6')">ข้อมูลการตรวจ และ การวินิจฉัย</button>
            </div>
                <div id="PP1" className = {styles2.tabcontent}>
                    <label className = {styles2.font} >เลขแฟ้ม</label>
                    <input className = {styles2.text} type="text" id="text" name="text" />
                    <label className = {styles2.font} >HN</label>
                    <input className = {styles2.text} type="text" id="text" name="text" />
                    <label className = {styles2.font} >บัตรประจำตัวประชาชน</label>
                    <input className = {styles2.text} type="text" id="text" name="text" /><br/>
                    <label className = {styles2.font} >ชื่อผู้ป่วย</label>
                    <select className = {styles2.titlename} name="titlename" id="titlename"/>
                    <input className = {styles2.text} type="text" id="text" name="text" />
                    <label className = {styles2.font} >นามสกุลผู้ป่วย</label>
                    <input className = {styles2.text} type="text" id="text" name="text" />
                    <label className = {styles2.font} >ชื่อเล่น</label>
                    <input className = {styles2.nickname} type="text" id="text" name="text" /><br/>
                    <label className = {styles2.font} >วัน/เดือน/ปีเกิด</label>
                    <input className = {styles2.date} type="date" id="text" name="text" />
                    <label className = {styles2.font} >อายุ</label>
                    <input className = {styles2.age} type="text" id="text" name="text" />
                    <label className = {styles2.font} >ปี</label>
                    <input className = {styles2.age} type="text" id="text" name="text" />
                    <label className = {styles2.font} >เดือน</label> <br/>
                    <label className = {styles2.font} >ศาสนา</label>
                    <input className = {styles2.checkbox} type="checkbox" id="text" name="text" />
                        <label className = {styles2.font} >พุทธ</label>
                    <input className = {styles2.checkbox} type="checkbox" id="text" name="text" />
                        <label className = {styles2.font} >อิสลาม</label>
                    <input className = {styles2.checkbox} type="checkbox" id="text" name="text" />
                        <label className = {styles2.font} >คริสต์</label>
                    <input className = {styles2.checkbox} type="checkbox" id="text" name="text" />
                        <label className = {styles2.font} >อื่น ๆ</label>
                        <input className = {styles2.checkbox2} type="text" id="text" name="text" />
                    <label className = {styles2.font} >เพศ</label>
                    <select className = {styles2.gender} type="text" id="text" name="text" />
                    <label className = {styles2.font} >เบอร์โทรศัพท์</label>
                    <input className = {styles2.text} type="text" id="text" name="text" /><br/>
                    <label className = {styles2.font} >ที่อยู่</label>
                        <label className = {styles2.font} > บ้านเลขที่</label>
                        <input className = {styles2.address} type="text" id="text" name="text" />
                        <label className = {styles2.font} >หมู่</label>
                        <input className = {styles2.address} type="text" id="text" name="text" />
                        <label className = {styles2.font} >ตรอก/ซอก/ซอย</label>
                        <input className = {styles2.address} type="text" id="text" name="text" />
                        <label className = {styles2.font} >ตำบล</label>
                        <input className = {styles2.address} type="text" id="text" name="text" />
                        <label className = {styles2.font} >อำเภอ</label>
                        <input className = {styles2.address} type="text" id="text" name="text" /><br/>
                        <label className = {styles2.font} >จังหวัด</label>
                        <input className = {styles2.address} type="text" id="text" name="text" />
                        <label className = {styles2.font} >รหัสไปรษณีย์</label>
                        <input className = {styles2.address} type="text" id="text" name="text" />
                    <label className = {styles2.font} >โรงเรียน</label>
                    <input className = {styles2.text} type="text" id="text" name="text" />
                    <label className = {styles2.font} >ระดับชั้น</label>
                    <select className = {styles2.text} type="text" id="text" name="text" /><br/>
                    <label className = {styles2.font} >การมาพบแพทย์</label>
                        <input className = {styles2.checkbox} type="checkbox" id="text" name="text" />
                        <label className = {styles2.font} >มาเอง ผู้พาผู้ป่วยมา</label>
                        <input className = {styles2.text} type="text" id="text" name="text" />
                        <input className = {styles2.checkbox} type="checkbox" id="text" name="text" />
                        <label className = {styles2.font} >ส่งต่อจาก</label>
                        <input className = {styles2.text} type="text" id="text" name="text" />
                </div>
        </div>
    
        )
    
}

        return (
            renderPatientProfile() 
        )
 
} 
  
    export default PatientProfile
