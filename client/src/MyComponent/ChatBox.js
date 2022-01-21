import React from 'react'
import {useContext} from 'react'
import { AccountContext } from '../context/AccountProvider';
import {UserContext} from '../context/UserProvider'
import { Box, makeStyles, Dialog, withStyles, Typography, Input, Button } from '@material-ui/core'
import { Chat } from './chat/Chat';
import {Menu} from './menu/Menu'
import EmptyChat from './chat/EmptyChat'


const useStyles = makeStyles({
    component: {
        background: "#00bfa5",
        height: "12vh",
        width: "100%",
    },
    head: {
        display: "flex",
        fontSize: 15,
        fontFamily: "Gill Sans, sans-serif",
        color: "#fff",
        alignItems: "center",
        textAlign: "center",

    },
    box: {
        display: "flex",
        padding: 39,
        marginLeft: "19%",

    },
    dadybox: {
        display: "flex",
        flexDirection: "row",
        height: "94vh",
        overflow: "hidden",
        border: "1px solid white"


    },
    
    secondchild: {
        height: "100%",
        width: "70%",
        minWidth:300,
        flexDirection: "column",
        border: "1px solid white",
        display: "flex",
    },
    component: {
        background: "#00bfa5",
        height: "13vh",
        width: "100%",
    },
    box:{
        display:"flex",
        padding: 39,
        marginLeft: "19%",
        
    }     

})
const style = {
    paper3: {
        height: "94%",
        marginLeft: "auto",
        marginRight: "auto",
        width: "72%",
        border: "1px solid ffffff",
        maxWidth: "100%",
        maxHeight: "200%",
        borderRadius: 0,
        marginTop: 40
    }
}

const ChatBox = ({ classes }) => {
    const className = useStyles();
    const {account}=useContext(AccountContext)
    const {person}=useContext(UserContext)
  
    return (
<>
        <header className={classes.component}>
                <Box className={className.box} >
                  
                </Box>
        </header>
        <Dialog
            open={true}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
            classes={{ paper: classes.paper3 }} >

            <Box className={className.dadybox}>
                <Box className={className.firstchild}>
                    {/* first child boxes */}
                   <Menu/>
                   
                </Box>
                
                <Box className={className.secondchild}>
                    {
                        Object.keys(person).length? <Chat/>:<EmptyChat/>
                    }
                </Box>
            </Box>
        </Dialog>
</>

    )
}
export default (withStyles(style))(ChatBox);
