import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation, setConversation } from '../../services/Api'
import UserProvider, { UserContext } from '../../context/UserProvider'
const usestyles = makeStyles({

    dp: {
        height: 50,
        width: 50,
        borderRadius: "50%",
        padding: "0 14px"

    },
    component: {
        display: "flex",
        height: 40,
        padding: "13px 0",
        cursor: "pointer"

    },
    timestamp:{
        fontSize:12,
        marginLeft:"auto",
        marginRight:20,
        color:"#00000099"

    },
    text:{
        color:"rgba(0,0,0,0.6)",
        fontSize:14
    }


})

const Converse = ({ user }) => {
    const { account, newMessageFlag } = useContext(AccountContext)
    const { setperson } = useContext(UserContext)

    const [message, setMessage] = useState({})

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ sender: account.googleId, receiver: user.googleId })
            setMessage({ text: data.message, timestamp: data.updatedAt })
        }
        getConversationMessage()

    }, [newMessageFlag])


    const setuser = async () => {
        setperson(user)
        await setConversation({ senderId: account.googleId, reciverId: user.googleId })
    }
    const classes = usestyles();


    return (

        <Box className={classes.component} onClick={() => setuser()}>
            <Box >
                <img src={user.imageUrl} className={classes.dp} />
            </Box>
            <Box style={{width:"100%"}} >
                <Box style={{display:'flex'}}>
                    <Typography >{user.name}</Typography>
                    {
                        message.text &&
                        <Typography className={classes.timestamp}>
                            {new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}
                        </Typography>
                    }
                </Box>
                <Box>
                    <Typography className={classes.text}>{message.text}</Typography>
                </Box>
            </Box>

        </Box>


    )
}
export default Converse