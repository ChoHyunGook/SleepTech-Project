import React from 'react'
import Layout from "../../pages/containers/Layout";
import Background from '../../picture/sleepWoman.png'
import {Box, Typography} from "@mui/material";


export default function Product(){
    return(
        <Layout>
            <div style={{backgroundImage:`url(${Background})`,
                backgroundSize:'cover'}}>
                <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                <Box
                    sx={{
                        backgroundColor:'white',
                        width:1000,
                        height:700,
                        border:1,
                        borderRadius:'2rem',
                        margin:3,
                        display:'flex',
                        alignItems:'center',
                        flexDirection:'column',
                        opacity:0.5
                    }}>
                    <Typography component="h1" variant="h5" sx={{paddingTop:10}}>
                        제품설명
                    </Typography><br/>
                </Box>
            </div>
            </div>
        </Layout>
    )
}