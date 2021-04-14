import titlestyle from "../styles/title.module.css"
import styles from "../styles/checkMeeting.module.css"
import Bar from "../components/bar"

const CheckMeeting = () => {
    const renderCheckMeeting  = () => {
        return (
        <div className = {titlestyle.container}>
            <Bar />
            <div className = {titlestyle.NameHead}>
                <p>ตรวจสอบการนัดหมาย</p>
            </div>

            <div className = {styles.containercheckMeetbar}>
                <div className = {styles.checkMeeting}>
                    <div className = {styles.meetingDoctor}>
                        <label for="physicianexam">แพทย์ผู้นัดหมาย</label>
                        <select className = {styles.select}  name="physicianexam" id="physicianexam">
                            <option value=""></option>
                        </select> 
                    </div>
                    <div className = {styles.meetingDate}>
                        <label>วันที่ต้องการตรวจสอบ</label>
                        <input className = {styles.input} type="date" id="date" name="date" />
                    </div>
                       
                   
                </div >
                <div className = {styles.containerButton}>
                    <div className = {styles.button}>
                        <button className = {styles.buttonshowmeet}>แสดงรายชื่อผู้ป่วยที่นัดมา</button>
                        <button className = {styles.buttonshowmeet2}>แสดงรายชื่อผู้ป่วยที่ไม่มาตามนัด</button>
                    </div>
                    <div className = {styles.button2}>
                        <button className = {styles.buttonshowmeet}>เลื่อนนัดผู้ป่วย</button>
                        <button className = {styles.buttonshowmeet2}>ตกลง</button>
                    </div>
                </div>
                    
            </div>
            
        </div>

        
    )    
}
    return (
        renderCheckMeeting () 
    )
}

export default CheckMeeting