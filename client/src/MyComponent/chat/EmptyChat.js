import React from 'react'
import { Box, makeStyles} from '@material-ui/core'
const useStyles=makeStyles({
    component:{
        background:'#f8f9fa',
        height:"100%",
        textAlign:"center",
        padding:"180px 0",
        
    },
    img:{
       
    }


})
const EmptyChat = () => {
    const url="https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png"
    const classes=useStyles();
    return (
        <Box className={classes.component}>
            <img src={url} className={classes.img} />
        </Box>

    )
}

export default EmptyChat
