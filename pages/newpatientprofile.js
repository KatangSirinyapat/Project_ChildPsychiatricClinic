import titlestyle from "../styles/title.module.css"
import Bar from "../components/bar"


const NewPatientProfile = () => {
    const renderNewPatientProfile = () => {
        return (
            <div>
                <Bar />
                <div className="flex flex-col justify-center items-center bg-babygray">
                    <p className="border-none rounded-lg bg-gray font-bold m-5 p-5">ลงทะเบียนผู้ป่วยใหม่</p>
                    <div className="grid grid-cols-2 gap-96 items-center bg-gray">
                        <span className="ml-5 m-3 font-bold">No :</span>
                        <div className="grid grid-cols-3 gap-8 mr-5">
                            <button className="bg-purple font-bold rounded p-2">แฟ้มภาพ</button>
                            <button className="bg-purple font-bold rounded p-2">บันทึก</button>
                            <button className="bg-purple font-bold rounded p-2">แก้ไข</button>
                        </div>
                    </div>
{/* <---------------------------------------------------------------Head----------------------------------------------------------------> */}
                    <div className="bg-gray px-1 pt-1 pb-1 mb-1 pr-5 flex flex-col my-5">
                        <div className="md:flex mb-2">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 ">
                                <label className="block mb-2">เลขแฟ้ม</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 ">
                                <label className="block mb-2">HN</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 ">
                                <label className="block mb-2">บัตรประจำตัวประชาชน</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                        </div>
{/* <--------------------------------------------------------------line1----------------------------------------------------------------> */}
                        <div className="md:flex mb-2">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">ชื่อผู้ป่วย</label>
                                <div className="flex flex-row">
                                    <select className="block w-30 bg-babygray rounded py-1 mb-2">
                                        <option>เด็กหญิง</option>
                                        <option>เด็กชาย</option>
                                        <option>นางสาว</option>
                                        <option>นาง</option>
                                        <option>นาย</option>
                                    </select>
                                <input className="block w-full bg-babygray rounded mb-2 ml-2" type="text"/>
                            </div>    
                            </div>
                           
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 ">
                                <label className="block mb-2">นามสกุลผู้ป่วย</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2 pb-1.5" type="text"/>
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">ชื่อเล่น</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2 pb-1.5" type="text"/>
                            </div>
                        </div>
{/* <--------------------------------------------------------------line2----------------------------------------------------------------> */}

                        <div className="md:flex mb-2">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block mb-2" >วัน/เดือน/ปีเกิด</label>
                                <input className="block w-40 bg-babygray rounded py-1 mb-2" type="date"/>
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 ">
                                <label className="block mb-2">เพศ</label>
                                <select className="block w-14 bg-babygray rounded py-1 mb-2" type="text">
                                    <option>หญิง</option>
                                    <option>ชาย</option>
                                </select>
                            </div>
                            <div className="md:w-14 px-3 mb-6 md:mb-0">
                                <label className="block mb-2" >อายุ</label>
                                <input className="block w-14 bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            <div className="md:flex items-end  px-3 md:mb-0">
                                <label className="block mb-2 px-2">ปี</label>
                                <input className="block w-14 bg-babygray rounded py-1 mb-2.5" type="text"/>
                                <label className="block mb-2 px-2">เดือน</label>
                            </div>


                        </div>
{/* <--------------------------------------------------------------line3----------------------------------------------------------------> */}
                        <div className="md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-2 md:mb-0">
                                <label className="block mb-2">ศาสนา</label>
                            <div className="flex flex-row">
                                <input className="h-5 w-8" type="checkbox"/>
                                <label>พุทธ</label>
                                <input className="h-5 w-8" type="checkbox"/>
                                <label>อิสลาม</label>
                                <input className="h-5 w-8" type="checkbox"/>
                                <label>คริสต์</label>
                                <label className="px-2">อื่นๆ</label>
                                <input className="block w-40 bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            </div>
                            <div className="md:w-1/2 px-3 mb-2 md:mb-0">
                                <label className="block mb-2">เบอร์โทรศัพท์</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/><br />
                            </div>
                        </div>
{/* <--------------------------------------------------------------line4----------------------------------------------------------------> */}
                        <div  className="md:flex mb-2">
                            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">ที่อยู่ บ้านเลขที่</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2"type="text"/>
                            </div>
                            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block mb-2" >หมู่</label>  
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">ตรอก/ซอก/ซอย</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block mb-2" >ถนน</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                        </div>
{/* <--------------------------------------------------------------line5----------------------------------------------------------------> */}                      
                        <div  className="md:flex mb-2">
                            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">ตำบล</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2"type="text"/>
                            </div>
                            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block mb-2" >อำเภอ</label>  
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">จังหวัด</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block mb-2" >รหัสไปรษณีย์</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                        </div>
{/* <--------------------------------------------------------------line6----------------------------------------------------------------> */}
                        <div className="md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">โรงเรียน</label>
                                <input  className="block w-full bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block mb-2" >ระดับชั้น</label>
                                <select  className="block w-full bg-babygray rounded py-1 mb-2" type="text">
                                    <option>อนุบาล</option>
                                    <option>ประถมศึกษา</option>
                                    <option>มัธยมศึกษา</option>
                                </select>  
                            </div>
                        </div>
{/* <--------------------------------------------------------------line7----------------------------------------------------------------> */}        
                        <div className="md:flex mb-2">
                        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">ผู้ปกครอง</label>
                                <div className="flex flex-row">
                                    <select className="block w-30 bg-babygray rounded py-1 mb-2" name="titlename" id="titlename">
                                        <option>นางสาว</option>
                                        <option>นาง</option>
                                        <option>นาย</option>
                                    </select>
                                <input className="block w-full bg-babygray rounded mb-2 ml-2" type="text"/>
                            </div>    
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0 ">
                                <label className="block mb-2">เกี่ยวข้องเป็น</label>
                                <select className="block w-full bg-babygray rounded py-1 mb-2 pb-1.5" type="text">
                                    <option>มารดา</option>
                                    <option>บิดา</option>
                                    <option>ญาติ</option>
                                </select>
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block mb-2">เบอร์โทรศัพท์ผู้ปกครอง</label>
                                <input className="block w-full bg-babygray rounded py-1 mb-2 pb-1.5" type="text"/>
                            </div>
                        </div>       
{/* <--------------------------------------------------------------line8----------------------------------------------------------------> */}      
                        <div className="md:flex mb-2">
                            <div className="px-3 mb-2 md:mb-0">
                                <label className="block mb-2">การมาพบแพทย์</label>
                            <div className="flex flex-row">
                                <input className="h-5 w-8" type="checkbox"/>
                                <label>มาเอง ผู้พาผู้ป่วยมา</label>
                                <select className="block w-48 bg-babygray rounded py-1 mb-2" type="text">
                                    <option>มารดา</option>
                                    <option>บิดา</option>
                                    <option>ญาติ</option>
                                </select>
                                <input className="h-5 w-8" type="checkbox"/>
                                <label>ส่งต่อจาก</label>
                                <input className="block w-44 bg-babygray rounded py-1 mb-2" type="text"/>
                            </div>
                            </div>
                            <div className="px-3 mb-2 md:mb-0">
                            <label  className="block mb-2">สิทธิการรักษา</label>
                                <select className="block w-full bg-babygray rounded py-1 mb-2" type="text">
                                    <option>สิทธิสวัสดิการการรักษาพยาบาลของข้าราชการ</option>
                                    <option>สิทธิประกันสังคม</option>
                                    <option>สิทธิหลักประกันสุขภาพ 30 บาท</option>
                                </select>
                            </div>
                        </div>
                    </div>
{/* <--------------------------------------------------------------line9----------------------------------------------------------------> */}
                </div>
            </div>
        )
    }
    return (
        renderNewPatientProfile()
    )
}

export default NewPatientProfile


