import React, {useEffect, useState} from 'react'
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer, BarChart,
} from 'recharts';
import {Data} from "../data/data";





export default function ComposeChart(){

    const [database,setDataBase] = useState({})

    const NREMSleep = Number(database.NREMSleep)
    const REMSleep = Number(database.REMSleep)
    const sleepTime = Number(database.sleepTime)




    const data = [

        {
            name: '깊은 수면',
            data: NREMSleep,
            amt: 100,
        },
        {
            name: '얕은 수면',
            data: REMSleep,
            amt: 100,
        },
        {
            name: '수면 시간',
            data:sleepTime,
            amt: 100,
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
            <div style={{width:500,height:300,marginTop:50, paddingLeft:50}}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={data}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" domain={[0, 720]}/>
                    <YAxis dataKey="name" type="category"  />
                    <Tooltip />
                        <Bar name='분' dataKey="data" barSize={40} fill="skyblue" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </>
    )
}