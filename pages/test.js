import titlestyle from "../styles/title.module.css"
import Bar from "../components/bar"


const NewPatientProfile = () => {
    const renderNewPatientProfile = () => {
        return (
            <div>
                <Bar />
                <div className="flex flex-col justify-center items-center bg-babygray border-2 border-gray-900">

                    <p className="border-none rounded-lg bg-gray font-bold m-5 p-5">ลงทะเบียนผู้ป่วยใหม่</p>
                    <div className="grid grid-cols-2 gap-96 items-center bg-gray">
                        <span className="ml-5 m-3 font-bold">No :</span>
                        <div className="grid grid-cols-3 gap-8 mr-5">
                            <button className="bg-purple font-bold rounded p-2">แฟ้มภาพ</button>
                            <button className="bg-purple font-bold rounded p-2">บันทึก</button>
                            <button className="bg-purple font-bold rounded p-2">แก้ไข</button>
                        </div>
                    </div>

                    <form className="grid grid-cols-1  mt-5 items-center border-2 border-pink-600">
                        <div className="grid grid-cols-3 col-span-1">
                            <div className="grid grid-cols-2 items-center border-2 border-green-600">
                                <label>เลขแฟ้ม</label>
                                <input className="h-8 bg-gray" type="text" id="text" name="text" />

                            </div>
                            <div className="grid grid-cols-2 items-center border-2 border-blue-600">
                                <label className="">HN</label>
                                <input className="w-100 h-8 bg-gray" type="text" id="text" name="text" />
                            </div>
                            <div className="grid grid-cols-2 items-center ">
                                <label className="">บัตรประจำตัวประชาชน</label>
                                <input className="w-100 h-8 bg-gray" type="text" id="text" name="text" />
                            </div>
                        </div>


                        <div className="grid grid-cols-3 border-2 border-red-600">
                            <div className="grid grid-cols-2 items-center">
                                <label>ชื่อผู้ป่วย</label>
                                <select className="h-8 bg-gray" name="titlename" id="titlename" />
                            </div>
                            <div>
                                <input className="h-8 bg-gray" type="text" id="text" name="text" />
                            </div>
                            <div className="grid grid-cols-2 items-center ">
                                <label >นามสกุลผู้ป่วย</label>
                                <input className="h-8 bg-gray" type="text" id="text" name="text" />
                            </div>

                        </div>
                        <div className="grid grid-cols-2 items-center ">
                            <label >ชื่อเล่น</label>
                            <input className="h-8 bg-gray" type="text" id="text" name="text" /><br />
                        </div>

                        <label >วัน/เดือน/ปีเกิด</label>
                        <input type="date" id="text" name="text" />

                        <label >อายุ</label>
                        <input type="text" id="text" name="text" />
                        <label >ปี</label>
                        <input type="text" id="text" name="text" />
                        <label >เดือน</label> <br />

                        <label >ศาสนา</label>
                        <input type="checkbox" id="text" name="text" />
                        <label >พุทธ</label>
                        <input type="checkbox" id="text" name="text" />
                        <label >อิสลาม</label>
                        <input type="checkbox" id="text" name="text" />
                        <label >คริสต์</label>
                        <input type="checkbox" id="text" name="text" />
                        <label >อื่น ๆ</label>
                        <input type="text" id="text" name="text" />

                        <label >เพศ</label>
                        <select type="text" id="text" name="text" />

                        <label >เบอร์โทรศัพท์</label>
                        <input type="text" id="text" name="text" /><br />

                        <label >ที่อยู่</label>
                        <label > บ้านเลขที่</label>
                        <input type="text" id="text" name="text" />
                        <label >หมู่</label>
                        <input type="text" id="text" name="text" />
                        <label >ตรอก/ซอก/ซอย</label>
                        <input type="text" id="text" name="text" />
                        <label >ตำบล</label>
                        <input type="text" id="text" name="text" />
                        <label >อำเภอ</label>
                        <input type="text" id="text" name="text" /><br />
                        <label >จังหวัด</label>
                        <input type="text" id="text" name="text" />
                        <label >รหัสไปรษณีย์</label>
                        <input type="text" id="text" name="text" />

                        <label >โรงเรียน</label>
                        <input type="text" id="text" name="text" />
                        <label >ระดับชั้น</label>
                        <select type="text" id="text" name="text" /><br />

                        <label >ผู้ปกครอง</label>
                        <select name="titlename" id="titlename" />
                        <input type="text" id="text" name="text" />
                        <label >เกี่ยวข้องเป็น</label>
                        <input type="text" id="text" name="text" />
                        <label >เบอร์โทรศัพท์ผู้ปกครอง</label>
                        <input type="text" id="text" name="text" />

                        <label >การมาพบแพทย์</label>
                        <input type="checkbox" id="text" name="text" />
                        <label >มาเอง ผู้พาผู้ป่วยมา</label>
                        <input type="text" id="text" name="text" />
                        <input type="checkbox" id="text" name="text" />
                        <label >ส่งต่อจาก</label>
                        <input type="text" id="text" name="text" />

                        <label >สิทธิการรักษา</label>
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Really long option that will likely overlap the chevron</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>

                    </form>
                </div>
            </div>
        )
    }
    return (
        renderNewPatientProfile()
    )
}

export default NewPatientProfile


