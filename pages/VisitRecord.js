import styles from "../styles/VisitRecord.module.css"
import titlestyle from "../styles/title.module.css"
import Bar from "../components/bar"


const VisitRecord = () => {
    const renderVisitRecord = () => {
        return (
        <div>
            <Bar />
        <div className = {titlestyle.container}>
           
            <div className = {titlestyle.NameHead}>
                <p>Visit Record</p>
            </div>

            <div className = {titlestyle.hnSearchbar}>
                <p className = {titlestyle.hn}>HN :</p>
                <input className = {titlestyle.hnSearch} type="text" placeholder="Hospital Number" name="search2" />
                <div className = {titlestyle.button}>
                    <button className = {titlestyle.edit}>แก้ไข</button>
                    <button className = {titlestyle.save}>บันทึก</button>
                </div>
                
            </div>

            <div className = {styles.visitRecordData}>
                <label className = {styles.font} for="date" >วัน/เดือน/ปีที่ตรวจ</label><br/>
                <input className = {styles.date} type="date" id="date" name="date" /><br/>
                
                <label className = {styles.font} for="physicianexam">แพทย์ผู้ตรวจ</label><br/>
                <select className = {styles.physicianexam} name="physicianexam" id="physicianexam">
                    <option value=""></option>
                </select><br/>
                
                <label className = {styles.font} for="detail">รายละเอียด</label><br/>
                <textarea className = {styles.detail} id="detail"></textarea>
            </div>
        </div>
        </div>
    )    
}
    return (
        renderVisitRecord() 
    )
}

export default VisitRecord