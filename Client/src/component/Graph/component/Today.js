import {Typography} from "@mui/material";
import RaderChart from "../graphComponent/RaderChart";
import ComposeChart from "../graphComponent/ComposeChart";
import React from "react";
import Arrangement from "./Arrangement";


export default function Today(){

    return(
        <>
            <div style={{display:'flex',alignItems:'center'}}>
                <Typography component="h1" variant="h5" sx={{marginTop:2}}>
                    오늘의 수면 컨디션
                </Typography>
            </div>
            <div style={{display:'flex',paddingBottom:20}}>
                <RaderChart/>
                <ComposeChart/>
            </div>
        </>
    )

}