import titlestyle from "../styles/title.module.css"
import styles from "../styles/record.module.css"
import Bar from "../components/bar"

const Record = () => {
    const renderRecord  = () => {
        return (
        <div className = {titlestyle.container}>
            <Bar />
            <div className = {titlestyle.NameHead}>
                <p>บันทึกการตรวจ</p>
            </div>

            <div className = {titlestyle.hnSearchbar}>
                <p className = {titlestyle.hn}>HN :</p>
                <input className = {titlestyle.hnSearch} type="text" placeholder="Hospital Number" name="search2" />
                <div className = {titlestyle.button}>
                    <button className = {titlestyle.edit}>แก้ไข</button>
                    <button className = {titlestyle.save}>บันทึก</button>
                </div>
            </div>

            <div className = {styles.recordData}>
                <div className = {styles.showRecord}>
                    <label className = {styles.font}>HN:</label>
                    <label className = {styles.font}>ชื่อ-สกุลผู้ป่วย:</label>
                    <label className = {styles.font}>วัน/เดือน/ปีที่ตรวจ:</label>
                    <label className = {styles.font}>แพทย์ผู้ตรวจ:</label>
                    <label className = {styles.font}>รายละเอียด:</label>
                </div>
                <div className = {styles.buttonData}>
                    <button className = {styles.buttonAdd}>เพิ่มรายการใหม่</button>
                    <button className = {styles.buttonUpdate}>แก้ไขรายการเก่า</button>
                </div>
            </div>
  
        </div>
    )    
}
    return (
        renderRecord () 
    )
}

export default Record