import React from 'react'
import { Box, Typography,makeStyles,InputBase } from '@material-ui/core'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicIcon from '@material-ui/icons/Mic';
import Mic from '@material-ui/icons/Mic';

const useStyles= makeStyles(theme=>({

    footer:{
        height:"100%",
        background:"#ededed",
        width:"100%",
        display:"flex",
        alignItems:"center",
        padding:"0 15px",
        '& > *':{
            margin:5,
            color:"black"
        }
    },
    clipicon:{
        transform:"rotate(40deg)"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft:25,
        fontSize:14,
        color:"black",
        width: '100%',
        height:20,
        
      },
      inputRoot: {
        width:"85%"
      },
      searchbox:{
          backgroundColor:"#FFFFFF",
          borderRadius:50,
          width:"85%"
      },
      mic:{
          
      }



}))
const Footer = ({sendText,setvalue, value}) => {
    const classes=useStyles();
    return (

        <Box className={classes.footer}>
            <EmojiEmotionsOutlinedIcon />
            <AttachFileOutlinedIcon className={classes.clipicon}/>
            <Box className={classes.searchbox}>
                <InputBase
                placeholder="Type a message"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  onKeyPress ={(e)=> sendText(e)}
                  onChange={(e)=>setvalue(e.target.value)}
                  value={value}
                />
               
            </Box>
            <Mic className={classes.mic}/>
        </Box>
    )
}

export default Footer
