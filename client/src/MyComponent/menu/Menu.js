import React from 'react'
import { useState } from 'react'
import { Header } from './Header'
import { Conversation } from './Conversation'
import { Search } from './Search'
import { Conversations } from './Conversation'

export const Menu = () => {
    const [text, settext]=useState('')
    return (
        <>
        
        <Header/>
        <Search settext={settext}/>
        <Conversation text={text}/>
        
        
        </>

    )
}
