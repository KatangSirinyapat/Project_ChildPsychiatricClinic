import styles from "../styles/VisitRecord.module.css"

const VisitRecord = () => {
    const renderVisitRecord = () => {
        return (
        <div className = {styles.container}>
                <nav className = {styles.title}>
                    <div className = {styles.head1}>
                        <p>HATYAI HOSPITAL</p>
                        <hr className = {styles.line}></hr>
                        <p>Child Psychiatric Clinic</p>  
                    </div>

                    <hr className = {styles.line2}></hr>
                    
                    <div  className = {styles.head2}>
                        <input className = {styles.search} type="text" placeholder="Search.." name="search" />
                    </div>

                    <hr className = {styles.line2}></hr>
                    
                </nav>

            <div className = {styles.visitRecordHead}>
                <p>Visit Record</p>
            </div>

            <div className = {styles.visitRecordbar}>
                <p className = {styles.hn}>HN :</p>
                <input className = {styles.hnSearch} type="text" placeholder="Hospital Number" name="search2" />
                <button className = {styles.edit}>แก้ไข</button>
                <button className = {styles.save}>บันทึก</button>
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
    )    
}
    return (
        renderVisitRecord() 
    )
}

export default VisitRecord