import { Typography,Box ,makeStyles} from '@material-ui/core'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
const useStyles=makeStyles({

    wraper:{
        background:'#FFFFFF',
        padding:5,
        maxWidth:"60%",
        display:"flex",
        borderRadius:9,
        width:"fit-content",
        wordBreak:"break-word"
    },
    text:{
        fontSize:14,
        padding:"0 25px 0 5px"
    },
    time:{
        fontSize:10,
        marginTop:"auto",
        marginTop:6,
        color:"#919191",
        wordBreak:"keep-all"
    },
    own:{
        background:"#dcf8c6",
        marginLeft:"auto",
        padding:5,
        maxWidth:"60%",
        display:"flex",
        borderRadius:9,
        width:"fit-content",
        wordBreak:"break-word"
    }


})
const Message = ({message}) => {
    const {account}=useContext(AccountContext)
    const classes=useStyles();
    const formatdate=(date)=>{
        return date< 10? '0'+date:date;
    }
    return (
        <Box className={account.googleId===message.sender? classes.own:classes.wraper}>
        <Typography className={classes.text}>{message.text}</Typography>
        <Typography className={classes.time}>
            {formatdate(new Date(message.createdAt).getHours())} : { formatdate(new Date(message.createdAt).getMinutes())}</Typography>
        </Box>
    )
}

export default Message
