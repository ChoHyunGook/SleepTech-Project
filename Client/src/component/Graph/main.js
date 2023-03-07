import {Box, Divider} from "@mui/material";
import Today from "./component/Today";
import Weeks from "./component/Weeks";
import Arrangement from "./component/Arrangement";
import React from "react";


export default function Main(){
    return(
        <>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',backgroundColor:'black'}}>
                <Box
                    sx={{
                        backgroundColor:'white',
                        width:1250,
                        height:900,
                        border:1,
                        borderRadius:'2rem',
                        margin:3,
                        display:'flex',
                        alignItems:'center',
                        flexDirection:'column',
                    }}>
                    <Today/>
                    <Divider color="#696969" sx={{height: 1.2, width: '1100px'}}/><br/>
                    <div style={{display:'flex', alignItems: 'center'}}>
                        <Weeks />
                        <Arrangement />
                    </div>
                </Box>
            </div>
        </>
    )
}