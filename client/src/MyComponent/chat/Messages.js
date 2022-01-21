import React from 'react'
import { useState, useContext, useEffect,useRef } from 'react'
import Footer from './Footer'
import { Box, Typography, makeStyles } from '@material-ui/core'
import Message from './Message'
import { getMessages } from '../../services/Api'
import { newMessage } from '../../services/Api'
import { AccountContext } from '../../context/AccountProvider'
const useStyles = makeStyles({

    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize: "40%"
    },
    component: {
        height: "81vh",
        overflowY:"scroll"
    },
    container:{
        padding:"1px 80px"
    }


})
const Messages = ({ conversation,person }) => {

    const { account ,socket,setNewMessageFlag,newMessageFlag} = useContext(AccountContext)

    const ScrollRef=useRef();
    useEffect(() => {
       ScrollRef.current?.scrollIntoView({transition:'smooth'})
    })

    const [messages, setMessages] = useState([]);
    const [value, setvalue] = useState()
    const [incomingMsg ,setIncomingMsg]=useState(null)
    const classes = useStyles();

    useEffect(() => {
      socket.current.on('getMessage',data=>{
            setIncomingMsg({
                sender:data.senderId,
                text:data.text,
                createdAt: Date.now()
            })
      })
    }, [])

    useEffect(() => {
        incomingMsg && conversation?.members?.includes(incomingMsg.sender)&& 
        setMessages(prev =>[...prev,incomingMsg])
        
    }, [incomingMsg,conversation])

    useEffect(() => {
        const getMessageDetails = async () => {
            let response = await getMessages(conversation._id)
            console.log(response)
            setMessages(response.data);
        }
        getMessageDetails();
    }, [conversation?._id,person._id,newMessageFlag])

    const  receiverId= conversation?.members?.find(member=>member!==account.googleId)


    const sendText = async (e) => {
        let code = e.keyCode || e.which
        if (!value) return;
        if (code === 13) {
            let message = {
                sender: account.googleId,
                conversationId: conversation._id,
                text: value
            }

            socket.current.emit('sendMessage',{
                senderId:account.googleId,
                receiverId: receiverId,
                text:value
            })
            await newMessage(message)
            setvalue('');
            setNewMessageFlag(prev => !prev )
        }

    }
    return (
        <>

            <Box className={classes.wrapper}>
                <Box className={classes.component}>
                    {

                        messages && messages.map(message => (
                            <Box className={classes.container} ref={ScrollRef}>
                                <Message message={message}/>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Footer sendText={sendText} setvalue={setvalue} value={value} />
        </>
    )
}

export default Messages
