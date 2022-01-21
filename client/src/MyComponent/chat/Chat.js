import React from 'react'
import {AccountContext} from '../../context/AccountProvider'
import { useState,useEffect,useContext  } from 'react'
import {UserContext} from '../../context/UserProvider'
import { getConversation } from '../../services/Api'
import ChatHeader from './ChatHeader'
import Messages from './Messages'

export const Chat = () => {
    const {account}=useContext(AccountContext)
    const {person}= useContext(UserContext)
    const [conversation, setconversation]=useState({})

    useEffect(() => {

        const getConversationDetail=async()=>{
           let data= await getConversation({sender:account.googleId , receiver:person.googleId})
            setconversation(data)
        }
        getConversationDetail();
        
    }, [person.googleId])
    return (
       <>
        <ChatHeader/>
        <Messages conversation={conversation} person={person}/>
       
       </>
    )
}
