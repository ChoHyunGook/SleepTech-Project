import React, {useEffect, useState} from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts';
import {Data,HourCalc} from "../data/data";



export default function RaderChart(){

    const [database,setDataBase] = useState({})

    const sleepTime = Number(database.sleepTime)
    const NREMSleep = Number(database.NREMSleep)
    const REMSleep = Number(database.REMSleep)
    const Snoring = Math.floor(Number(database.Snoring) / 50 *100)
    const Toss =Math.floor(Number(database.Toss) / 50 *100)

    const sleepTimeHour = Math.floor(HourCalc(sleepTime) / 12 *100)
    const NREMSleepHour = Math.floor(HourCalc(NREMSleep) / 12 *100)
    const REMSleepHour = Math.floor(HourCalc(REMSleep) / 12 *100)



    const data = [
        {
            subject: '수면시간',
            A: sleepTimeHour,
            fullMark: 100,
        },
        {
            subject: '깊은수면',
            A: NREMSleepHour,
            fullMark: 100,
        },
        {
            subject: '코골이 횟수',
            A: Snoring,
            fullMark: 100,
        },
        {
            subject: '얕은수면',
            A: REMSleepHour,
            fullMark: 100,
        },
        {
            subject: '뒤척임',
            A: Toss,
            fullMark: 100,
        },
    ];


    useEffect(()=>{
        const today = new Date();
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        const dateString = year + '-' + month  + '-' + day;
        const db = Data.find(e=>e.date === dateString)
        setDataBase(db)
    },[])



    return(
        <>
            <div style={{width:500,height:350}}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <Tooltip />
                        <Legend />
                        <PolarRadiusAxis angle={70} domain={[0, 100]}/>
                        <Radar name="백분율 %(소수점 올림)" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </>
    )

}