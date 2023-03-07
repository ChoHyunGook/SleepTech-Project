import React, {useState} from "react";
import {Box, Typography, Slider} from "@mui/material";

const marks = [
    {
        value: 0,
        label: '0분',
    },
    {
        value: 5,
        label: '5분',
    },
    {
        value: 15,
        label: '15분',
    },
    {
        value: 25,
        label: '25분',
    },
    {
        value: 35,
        label: '35분',
    },

    {
        value: 45,
        label: '45분',
    },

    {
        value: 55,
        label: '55분',
    },


];




function valuetext(value) {
    return `${value}분`;
}

export default function Arrangement(){

    const [value, setValue] =useState([5, 60]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column',paddingLeft:10, marginTop:20}}>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Box
                        sx={{
                            backgroundColor: 'lightgrey',
                            width: 240,
                            height: 80,
                            borderRadius: '1rem',
                            marginBottom: 2,
                            display:'flex',
                            alignItems:'center'
                        }}>
                        <Typography component="h4" variant="h8" sx={{paddingLeft:2}}>
                            수면시간
                        </Typography>
                        <Typography component="h5" variant="h4" color='white' sx={{paddingLeft:8}}>
                            6h
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: 'lightgrey',
                            width: 240,
                            height: 80,
                            borderRadius: '1rem',
                            marginBottom: 2,
                            marginLeft:3,
                            display:'flex',
                            alignItems:'center'
                        }}>
                        <Typography component="h4" variant="h8" sx={{paddingLeft:2}}>
                            깊은수면
                        </Typography>
                        <Typography component="h5" variant="h4" color='white' sx={{paddingLeft:8}}>
                            2h
                        </Typography>
                    </Box>
                </div>


                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Box
                        sx={{
                            backgroundColor: 'lightgrey',
                            width: 240,
                            height: 80,
                            borderRadius: '1rem',
                            marginBottom: 2,
                            display:'flex',
                            alignItems:'center'
                        }}>
                        <Typography component="h4" variant="h8" sx={{paddingLeft:2}}>
                            코골이 횟수
                        </Typography>
                        <Typography component="h5" variant="h4" color='white' sx={{paddingLeft:5}}>
                            10회
                        </Typography>
                        
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: 'lightgrey',
                            width: 240,
                            height: 80,
                            borderRadius: '1rem',
                            marginBottom: 2,
                            marginLeft:3,
                            display:'flex',
                            alignItems:'center'
                        }}>
                        <Typography component="h4" variant="h8" sx={{paddingLeft:2}}>
                            뒤척임
                        </Typography>
                        <Typography component="h5" variant="h4" color='white' sx={{paddingLeft:9}}>
                            5회
                        </Typography>
                    </Box>
                </div>

                <div style={{display:"flex",alignItems:'center'}}>
            <Box
                sx={{
                    backgroundColor:'lightgrey',
                    width:520,
                    height:200,
                    borderRadius:'1rem',
                    display:'flex',
                    flexDirection:'column'
                }}>

                <div style={{marginTop: 18}}>
                    <Typography component="h4" variant="h5" color='white' sx={{paddingLeft: 7}}>
                        잠 드는데에
                    </Typography>
                    <div style={{display: 'flex', alignItems: 'center', paddingLeft: 180}}>
                        <Typography component="h4" variant="h4" color='orange' sx={{paddingLeft: 2}}>
                            1시간
                        </Typography>
                        <Typography component="h4" variant="h5" color='white' sx={{paddingLeft: 2}}>
                            걸렸어요
                        </Typography>
                    </div>
                </div>

                <div style={{alignItems:'center',display:'flex',paddingLeft:50,marginTop:50}}>

                <Box sx={{ width: 400 }}>
                    <Slider
                        aria-label="Always visible"
                        valueLabelDisplay="on"
                        marks={marks}
                        value={value}
                        onChange={handleChange}
                        getAriaValueText={valuetext}
                    />
                </Box>
                </div>


            </Box>
                </div>
            </div>
        </>
    )
}