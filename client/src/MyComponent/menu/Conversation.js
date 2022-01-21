import React from 'react'
import { useEffect ,useState, useContext} from 'react'
import { Box, makeStyles, Typography ,} from '@material-ui/core'
import Converse from './Converse'
import { getUsers   } from '../../services/Api'
import pig from '../pig1.jpg'
import { AccountContext } from '../../context/AccountProvider'

 const useStyles = makeStyles({
  component:{
      height:"80vh",
      overflow:"overlay"
  }

})
export const Conversation = ({text}) => {

    const [user, setuser]= useState([])
    const {account,socket ,setActiveUsers}=useContext(AccountContext)
    
    useEffect(()=>{
        const fetchdata=async()=>{
          const data=  await getUsers();
         const filterdata= data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
          setuser(filterdata);
        }
        fetchdata();

    },[text])
    

    useEffect(() => {
       socket.current.emit('addUser',account.googleId)
       socket.current.on('getUsers', users=>{
        setActiveUsers(users)
       })
    },[account]);


    const className = useStyles();
    return (
        <>
        
            <Box className={className.component}>
                {
                    user.map(user=>(
                        user.googleId !== account.googleId &&
                        <Converse user={user}/>
                    ))
                }
                
            </Box>

        
        
        </>

    )
}