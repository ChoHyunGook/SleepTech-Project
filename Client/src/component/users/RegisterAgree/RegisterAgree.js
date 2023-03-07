import Layout from "../../../pages/containers/Layout";
import {Box, Button, Checkbox, Divider, FormControlLabel, Typography} from "@mui/material";
import React, {useState} from 'react'
import Background from "../../../picture/sleepWoman.png";
import Logo from '../../../picture/Logo.png'


export default function RegisterAgree(){

    const [checkList, setCheckList] = useState([]);

    const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? setCheckList(["service","user"])
            : setCheckList([])
    }

    const check = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? setCheckList([...checkList, e.target.name])
            : setCheckList(checkList.filter((choice)=> choice !== e.target.name))
    }
    const isAllChecked = checkList.length ===2;
    const disabled = !isAllChecked



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
                            height: '500px',
                            width: '400px',
                            borderRadius:'0.5rem',
                            opacity:0.8,
                        }}
                    ><br/>
                        <img alt="No Images" src={Logo} style={{width:150}}/>
                        <Typography component="h1" variant="h5" sx={{paddingTop:1}}>
                            약관동의
                        </Typography><br/>
                        <Divider color="#696969" sx={{ height: 2, width: '350px' }} />
                        <Box component="form" noValidate sx={{mt:1}}>
                            <br/>
                            <FormControlLabel
                                control={<Checkbox
                                    style={{fontWeight:2}}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="all"
                                    onChange={checkAll}
                                    checked={checkList.length === 2 ? true : false}
                                    color="primary"/>}
                                label={<Typography variant='body2' >이용약관 전체동의</Typography>}
                            /><br/><br/>

                            <FormControlLabel
                                control={<Checkbox color="primary"
                                                   margin="normal"
                                                   required
                                                   fullWidth
                                                   name="service"
                                                   onChange={check}
                                                   checked={checkList.includes('service') ? true : false}/>}
                                label={<Typography variant='body2' >서비스 이용약관에 동의합니다.(필수)</Typography>}
                            /><br/>
                            <FormControlLabel
                                control={<Checkbox color="primary"
                                                   margin="normal"
                                                   required
                                                   fullWidth
                                                   name="user"
                                                   onChange={check}
                                                   checked={checkList.includes('user') ? true : false}/>}
                                label={<Typography variant='body2' >개인정보 수집 및 이용에 동의합니다.(필수)</Typography>}
                            /><br/><br/><br/>
                            <Button disabled={disabled}
                                    autoFocus
                                    type="submit"
                                    href='/register'
                                    required
                                    fullWidth
                                    style={
                                        disabled
                                            ?{backgroundColor:'#859594'}
                                            :{backgroundColor:'#1e90ff'}
                                    }
                            >
                                <Typography variant='body2' color="primary.contrastText">
                                    다음</Typography>
                            </Button><br/><br/>

                        </Box>

                    </Box>
                </div>
            </div>
        </Layout>
    )
}