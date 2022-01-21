import {useContext} from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import  Login  from './Login';

import ChatBox from './ChatBox';
import { AccountContext } from '../context/AccountProvider';
import { Box, makeStyles, Typography,} from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        background: "#128c7e",
        height: "13vh",
        width: "100%",
    },
    head: {
        display:"flex",
        fontSize: 15,
        fontFamily: "Gill Sans, sans-serif",
        color: "#fff",
        alignItems:"center",
        textAlign: "center",
       

    },
    icon: {
        
        width: 49,
        height: 47,
        marginRight:"9px"
       
        
    },
    box:{
        display:"flex",
        padding: 39,
        marginLeft: "19%",
        
    }      
    

})
export default function Client() {
    const classes = useStyles();
    const {account}=useContext(AccountContext)
    return (
        <>

            <header className={classes.component}>
                <Box className={classes.box} >
                    <Typography className={classes.head}>
                        <WhatsAppIcon className={classes.icon} /> WHATSAPP WEB
                    </Typography>
                </Box>
                {account ? <ChatBox/> : <Login/>}
            </header>
     
        </>
    )
}

