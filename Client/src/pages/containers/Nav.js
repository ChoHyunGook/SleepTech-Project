import React from 'react'
import styled from 'styled-components'
import {Button, Typography} from "@mui/material";


const Common = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`

const Home = styled.a`
    display: flex;
    align-items:center;
    margin: 1px;
    text-decoration: none;
    color: black;
    font-weight: bold;
  padding-left: 50px;
  padding-bottom: 10px;
`

const LogoImg = styled.img`
    width:120px;
  margin-top: 8px;
`

const ContlorBox = styled.div`
    display: flex;
    align-items:center;
    padding-right: 50px;
`

const Contlor = styled.a`
    margin:10px;
    text-decoration: none;
    color: black;
  padding-right: 30px;
`


const NavTop = styled.div`
  display: flex;
  align-items: unset;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: -30px;
  button {
    background: #004097;
    border: none;
  }
`;

const styles = {
    width: '100%',
    maxWidth: '180px',
    bgcolor: '#f0f4fa',
    float: 'right',
    position:'sticky'
};



export default function Nav(){
    return(
        <>
            <Common>
                <Home href='/'>
                    <LogoImg href='/' src="images/Logo.jpg"/>
                </Home>
                <ContlorBox >
                    <Contlor href='/product'>제품설명</Contlor>
                    <Contlor href='/customer'>고객센터</Contlor>
                    <Contlor href='/joinAgree'>회원가입</Contlor>
                    <Contlor href='/login'>로그인</Contlor>
                </ContlorBox>
            </Common>
        </>
    )
}