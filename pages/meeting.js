import Bar from "../components/bar"
import axios from "axios"
import { useState, useEffect } from "react"


const URL = `http://178.128.90.50:3000/meets`


const Meeting = () => {

    const [meets, setMeets] = useState([]);
    const [clinicNumber, setClinicNumber] = useState('')
    const [detail, setDetail] = useState('')
    const [topic, setTopic] = useState('')
    const [date, setDate] = useState('')
    const [timeStart, setTimeStart] = useState('')
    const [timeEnd, setTimeEnd] = useState('')
    const [doctorId, setDoctorId] = useState(0)
    const [patientId, setPatientId] = useState(0)

    useEffect(() => {
        getMeets()


    }, [])

    const getMeets = async () => {
        // const promise =  await axios.get(URL)
        // const dataPromise = promise.then((response) => response.data)


        let meet = await axios.get(URL)
        setMeets(meet.data)
    }

    const addMeet = async (ClinicNumber, Detail, Topic, Date, TimeStart, TimdEnd, DoctorId, PatientId) => {
        let meet = await axios.post(URL, { ClinicNumber, Detail, Topic, Date, TimeStart, TimdEnd, DoctorId, PatientId })
        setMeets(meet.data)

    }






    const renderMeeting = () => {
        return (
            <div>
                <Bar />

                <div className="flex flex-col fixed justify-start items-center text-center w-screen h-screen bg-babygray">

                    <p className="border-none rounded-lg bg-gray font-bold m-7 p-5 w-44">การนัดหมายผู้ป่วย</p>

                    <div className="w-6/12 md:grid grid-cols-4 bg-gray p-4 items-center text-center">
                        <span className="flex justify-start font-bold">เลขประจำตัวผู้ป่วย :</span>
                        <div  className="col-span-2">
                            <input className="block w-full justify-self-start p-1 pl-2 bg-purple border-none rounded-md" type="text" placeholder="Hospital Number" />
                        </div>
                        <span className="ml-2 justify-self-end">
                            <button className="bg-purple font-bold rounded p-1">แก้ไข</button>
                            <button className="bg-purple font-bold rounded p-1 ml-4">บันทึก</button>
                        </span>
                    </div>

                    <div className="w-6/12 md:flex flex-col bg-gray m-8 p-2 ">
                        <div className="md:grid grid-cols-4 m-3">
                            <label className="flex justify-start">เลขประจำตัวผู้ป่วย :</label>
                            <div className="grid col-span-2">
                                <input className="block w-full bg-babygray rounded py-1 pl-2" type="text" onChange = { (e) => setClinicNumber(e.target.value)}/>
                            </div>
                        </div>

                        <div className="md:grid grid-cols-4 m-3">
                            <label className="flex justify-start">ชื่อ-สกุลผู้ป่วย :</label>
                            <div className="grid col-span-2">
                                <input className="block w-full bg-babygray rounded py-1 pl-2" type="text" onChange = { (e) => setDetail(e.target.value)}/>
                            </div>
                        </div>

                        <div className="md:grid grid-cols-4 m-3">
                            <label className="flex justify-start">วันที่นัดหมาย :</label>
                            <div className="grid col-span-2">
                                <input className="block w-full bg-babygray rounded py-1 pl-2" type="date" onChange={(e) => setDate(e.target.value)} />
                            </div>
                        </div>

                        <div className="md:grid grid-cols-4 m-3">
                            <label className="flex justify-start">เวลาที่นัดหมาย :</label>
                                <div className="flex flex-row space-x-4 col-span-2">
                                    <input className="block w-full bg-babygray rounded py-1 pl-2" type="time" onChange={(e) => setTimeStart(e.target.value)}/>
                                    <label className="w-3/12 grid justify-items-center">ถึง</label>
                                    <input className="block w-full bg-babygray rounded py-1 pl-2" type="time" onChange={(e) => setTimeEnd(e.target.value)}/>
                                </div>
                        </div>

                        <div className="md:grid grid-cols-4 m-3">
                            <label className="flex justify-start">แพทย์ผู้นัดหมาย :</label>
                            <div className="flex flex-row space-x-4 col-span-2">
                            {/* <input className="block w-full bg-babygray rounded py-1 pl-2" type="number" onChange={(e) => setDoctorId(e.target.value)}/> */}
                            <select className="block w-full bg-babygray rounded py-1 pl-2" onChange={(e) => setDoctorId(e.target.value)}>
                                <option>แพทย์ A</option>
                                <option>แพทย์ B</option>
                                <option>แพทย์ C</option>
                            </select>
                            </div>
                        </div>

                        <div className="md:grid grid-cols-4 m-3">
                            <label className="flex justify-start">ห้องตรวจ :</label>
                            <div className="flex flex-row space-x-4 col-span-2">
                            {/* <input className="block w-full bg-babygray rounded py-1 pl-2" type="number" onChange={(e) => setPatientId(e.target.value)}/> */}
                            <select className="block w-full bg-babygray rounded py-1 pl-2" onChange={(e) => setPatientId(e.target.value)}>
                                <option>ห้อง A</option>
                                <option>ห้อง B</option>
                            </select><br /> 
                            </div>
                        </div>

                        <div className="flex justify-end mr-2">
                            <button className="text-center w-20 bg-purple font-bold rounded p-1 mb-2" onClick={ () => addMeet(clinicNumber, detail, topic, date, timeStart, timeEnd, doctorId, patientId)}>ตกลง</button>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
    return (
        <div>
            { renderMeeting()}
      

        </div>


    )
}

export default Meeting