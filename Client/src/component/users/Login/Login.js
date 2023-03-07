import Layout from "../../../pages/containers/Layout";
import Background from "../../../picture/sleepWoman.png";
import Logo from "../../../picture/Logo.png";
import {Box, Button, FormHelperText, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import styled from "styled-components";


const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 100px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

export default function Login(){

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const [EmailMessage, setEmailMessage] = useState("")
    const [PwMessage, setPwMessage] = useState("")

    const [isEmail, setIsEmail] = useState(false)
    const [isPw, setIsPw] = useState(false)



    const onChangeEmail = (e) => {
        const currentEmail = e.currentTarget.value;
        setUserId(currentEmail)
        const emailRegExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false);
        } else {
            setEmailMessage("");
            setIsEmail(true);
        }
    };

    const onChangePassword = (e) => {
        const currentPw = e.currentTarget.value;
        setPassword(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPw(false);
        } else {
            setPwMessage("");
            setIsPw(true);
        }
    };


    return(
        <Layout>
            <div style={{backgroundImage:`url(${Background})`,
                backgroundSize:'cover'}}>
                <div style={{alignItems:'center',display:'flex',flexDirection:'column',paddingBottom:140}}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '520px',
                            width: '450px',
                            borderRadius:'0.5rem',
                            opacity:0.8,
                        }}
                    ><br/>
                        <img alt="No Images" src={Logo} style={{width:150}}/>
                        <Typography component="h1" variant="h5" sx={{paddingTop:1}}>
                            로그인
                        </Typography><br/>

                        <TextField
                            onChange={onChangeEmail}
                            autoFocus
                            required
                            value={userId}
                            sx={{width:350,margin:3}}
                            id="userId"
                            name="userId"
                            label="아이디(E-Mail)"
                            error={EmailMessage === '이메일의 형식이 올바르지 않습니다!'}
                        />

                        <FormHelperTextsRED>{EmailMessage}</FormHelperTextsRED>

                        <TextField
                            onChange={onChangePassword}
                            required
                            sx={{width:350, margin:3}}
                            type="password"
                            value={password}
                            name="password"
                            label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                            error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'}
                        />

                        <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2, mb: 1 ,
                                width:350,
                                height:50,
                                justifyContent: 'center',
                                alignItems: 'center' }}
                            size="large"
                            disabled={ isEmail === false || isPw === false }
                        >
                            로그인
                        </Button>


                    </Box>
                </div>
            </div>
        </Layout>
    )
}