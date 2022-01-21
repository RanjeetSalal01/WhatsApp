import React from 'react'
import { useContext, useState } from 'react'
import { AccountContext } from '../../context/AccountProvider';
import { Box,makeStyles,Typography } from '@material-ui/core'
const useStyles=makeStyles({

    imgcontainer:{
        display:"flex",
        justifyContent:"center",  
        
    },
    picture:{
        height:200,
        width:200,
        borderRadius:"100%",
        padding:"18px 0"
    },
    namecontainer:{
        backgroundColor:"#fff",
        padding:"12px 30px 2px",
        boxShadow:"0 1px 3px rgba(0,0,0,0.08) ",
        '& :first-child':{
            fontSize:14,
            color:'#009688'
        },
        '& :last-child':{
           margin:"14px 0",
            color:'#4a4a4a'
        }
    },
    typo:{
        
        padding:" 10px 20px 28px 30px ",
        '& > *':{
            fontSize:13,
            color:"rgba(0,0,0,0.45)"
        }

    }

})
export const Profile = () => {
    const classes= useStyles();
    const { account } = useContext(AccountContext)
    return (
        <>
       <Box className={classes.imgcontainer}>
       <img className={classes.picture}  src={account.imageUrl} alt="" />
       </Box>
       <Box className={classes.namecontainer}>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
       </Box>
       <Box className={classes.typo}>
        <Typography>
            This is not your username or pin. This name will be visible to your whatsapp contacts.
        </Typography>
       </Box>
       <Box className={classes.namecontainer}>
       <Typography>About</Typography>
        <Typography>Eat Sleep Play Repeat!</Typography>
       </Box>
        </>
    )
}
