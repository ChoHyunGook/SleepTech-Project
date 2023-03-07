import React, {useEffect, useState} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Data, HourCalc} from "../data/data";

export default function LineCharts(){

    const [database,setDataBase] = useState({})

    const sleepTime = Number(database.sleepTime)
    const NREMSleep = Number(database.NREMSleep)
    const REMSleep = Number(database.REMSleep)
    const Snoring = Math.floor(Number(database.Snoring) / 50 *100)
    const Toss =Math.floor(Number(database.Toss) / 50 *100)

    const sleepTimeHour = Math.floor(HourCalc(sleepTime) / 12 *100)
    const NREMSleepHour = Math.floor(HourCalc(NREMSleep) / 12 *100)
    const REMSleepHour = Math.floor(HourCalc(REMSleep) / 12 *100)

    useEffect(()=>{
        console.log(Data)

        const map1 = Data.map(x=>Math.floor(HourCalc(Number(x.NREMSleep)) / 12 *100))
        const map2 = Data.map(x=>Math.floor(HourCalc(Number(x.REMSleep)) / 12 *100))

        const newData = Data.map(obj=>{
            let db = [];
            db['NREMSleep'] = obj.NREMSleep
        })


        const datas = [
            {
                NREMSleep: map1,
                REMSleep: map2
            },
        ]
        //console.log(map1)
        console.log(datas)
        //const map = new Map()
        // Data.map(item=>map.set('NREMSleep',Math.floor(HourCalc(Number(item.NREMSleep))/12*100)))
        // Data.filter(item=>map.set(item.REMSleep, item))
        // const mapper = Data.map(el=> 'NREMSleep', el.REMSleep)

    },[])

    return(
        <>
            <div style={{width:600,height:350,display:'flex',alignItems:'center',flexDirection:'column'}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={Data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 2,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" name='얕은 수면' dataKey="REMSleep" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" name='깊은 수면' dataKey="NREMSleep" stroke="#82ca9d" />
                    <Line type="monotone" name='코골이' dataKey="Snoring" stroke="blue" />
                    <Line type="monotone" name='뒤척임' dataKey="Toss" stroke="red" />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </>
    )
}
