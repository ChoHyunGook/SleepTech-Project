import {Typography} from "@mui/material";
import React from "react";
import LineChart from "../graphComponent/LineChart";


export default function Weeks(){
    return(
        <>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column', paddingRight:50}}>
                <Typography component="h1" variant="h5" sx={{marginTop:1}}>
                    주간 수면 컨디션
                </Typography>
                <LineChart/>
            </div>
        </>
    )
}