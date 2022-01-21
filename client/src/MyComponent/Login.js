import React from 'react'
import { Box, Dialog, withStyles, List, ListItem, makeStyles, Typography, Link, Checkbox } from '@material-ui/core';
import qrcode from './download.png'
import GoogleLogin from 'react-google-login';
import ReactPlayer from 'react-player'
import { useContext } from 'react';
import { clientid } from '../constant/data';
import { addUser } from '../services/Api';

import { AccountContext } from '../context/AccountProvider';
const useStyles = makeStyles({

    img: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        width: 264,
        height: 264,
        overflow: "hidden",


    },
    fatherbox: {
        display: "flex",
        padding: "64px 60px 110px"

    },
    title: {
        fontSize: 22,
        color: "grey",
        fontFamily: "Gill Sans, sans-serif",
        marginTop: 10,
        marginBottom: 22,
    },
    list: {
        '& > *': {
            fontSize: 18,
            color: "grey",
            fontFamily: "Gill Sans, sans-serif",
            marginTop: 9,
            lineHeight: 1,
        },

    },
    video: {
        display: "block",
        margin: "0px auto",

    },

    second: {
        marginLeft: "10%"
    },
    typo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "grey"
    },
    checkbox: {
        display: "flex"

    },
    third: {
        display: "flex",
        marginLeft: 33
    },
    link: {
        marginTop: 90,
        color: "grey"
    },
    google:{
        position:"absolute",
        left:"75%",
        top:"20%"
    }


})
const style = {
    paper2: {
        height: "90%",
        width: "47%",
        marginTop: 96,
        maxWidth: "100%",
        marginLeft:"auto",
        overflow:"hidden",
        marginRight:"auto"
    }



}

const Login = ({ classes }) => {
    const className = useStyles();
    

    const {account,setAccount}=useContext(AccountContext)

    const OnLoginSuccess= async(res)=>{
        console.log('login successful',res.profileObj);
        setAccount(res.profileObj)
       await  addUser(res.profileObj)
    }
    const OnLoginFailure=(res)=>{
        console.log('login failed')
    }

    return (
        <Dialog open={true}
            classes={{ paper: classes.paper2 }}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
        >
            <Box className={className.fatherbox}>
                <Box className={className.first}>
                    <Typography className={className.title}>To You Use WhatsApp On Your Computer:</Typography>
                    <List className={className.list}>
                        <ListItem>1.Open WhatsApp On your Phone</ListItem>
                        <ListItem>2.Tap Menu Or Setting And Select Linked Devices </ListItem>
                        <ListItem>3.Point your Phone to Screen to Capture the code </ListItem>
                    </List>
                    <Typography className={className.link}><Link>Need help To get started?</Link></Typography>
                </Box>
                <Box className={className.second}>
                    <img className={className.img} src={qrcode} alt="" srcset="" />
                    <Box  className={className.google}>
                    <GoogleLogin 
                   
                        
                        clientId={clientid}
                        buttonText=""
                        onSuccess={OnLoginSuccess}
                        onFailure={ OnLoginFailure}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                    
                    /></Box>
                    <Box className={className.third}>
                        <Checkbox
                            className={className.checkbox}
                            defaultChecked
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }
                            }
                        />
                        <Typography className={className.typo}>Keep me signed in</Typography>
                    </Box>
                </Box>


            </Box>

            <ReactPlayer className={className.video} url="https://youtu.be/2vaxeyF-DsM" />
        </Dialog>
    )
}
export default (withStyles(style))(Login);
