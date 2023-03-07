import React from 'react'
import styled from "styled-components";
import {Typography} from "@mui/material";


const Common = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  background-color: whitesmoke;
  flex-direction: column;
`


export default function Footer(){
    return(
        <>
            <Common>
                <div style={{display: 'flex',
                    alignItems: "center"}}>
                    <img alt="No Images" src="images/new_blaubit.png"
                         style={{
                             alignItems:'center', display:'flex',padding:5,width:250
                         }}/>
                    <div>
                        <Typography  component="h5" variant="h7" color="grey" style={{padding:10}}>
                            대표전화 031-605-7906
                        </Typography>
                        <Typography  component="h5" variant="h7" color="grey" style={{padding:10}}>
                            본사: 경기도 성남시 수정구 창업로 54, 704호,705호
                        </Typography>
                        <Typography  component="h5" variant="h7" color="grey" style={{padding:10}}>
                            연구소: 서울특별시 금천구 가산디지털2로 101, B동 1311호
                        </Typography>
                    </div>
                </div>
            </Common>
        </>
    )
}