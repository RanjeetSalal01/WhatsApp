import { Box, Typography ,makeStyles} from '@material-ui/core'
import { useContext } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import {UserContext} from '../../context/UserProvider'
import { AccountContext } from '../../context/AccountProvider';
const useStyles=makeStyles({

    dp:{
        height:50,
        width:50,
        borderRadius:"50%",
        padding:"0 14px"
       
    },
    component:{
        display:"flex",
        height:40,
        padding:"10px 16px",
        background:"#ededed",
        cursor:"pointer",
        alignItems:"center"
        
    },
    name:{
        marginLeft:10
    },
    status:{
        fontSize:12,
        marginLeft:10,
        color:"rgb(0,0,0,0.6)"
    },
    option:{
        marginLeft:"auto",
        '& > *':{
            fontSize:22,
            padding:8,
            color:"#919191"
        }
    }



})

const ChatHeader = () => {
    const classes=useStyles();
    const {person}=useContext(UserContext)

    const { activeUsers } = useContext(AccountContext)

    return (
    <Box className={classes.component}>
            
        <Box >
            <img src={person.imageUrl} className={classes.dp}/>
        </Box>
        <Box>
            <Typography className={classes.name}>{person.name}</Typography>
            <Typography className={classes.status}>
                {activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offine'}
                </Typography>
        </Box>
        <Box className={classes.option}>
            <SearchIcon/> 
            <MoreVertIcon/>
        </Box>


    </Box>

    )
}

export default ChatHeader
