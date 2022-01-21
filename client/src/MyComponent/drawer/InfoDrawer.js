import { Drawer,Box, Typography ,makeStyles} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Profile } from './Profile'
const useStyles = makeStyles({

   header:{

      background:'#00bfa5',
      height:97,
      color:'#fff',
      display:"flex",
      '& > *':{
         marginTop:"auto",
         padding:15,
         fontweight:600
      }
   },
   component:{
      background:"#ededed",
      height:"85%"
   }
      
})


 const InfoDrawer = ({open , setopen}) => {
  
   const classes =useStyles();
   const handleClose = () =>{
      setopen(false);
   }
   
    return (
       <Drawer open={open} onClose={handleClose}>
            <Box className={classes.header}>
               <ArrowBackIcon onClick={()=>handleClose()}/>
               <Typography>profile</Typography>
            </Box>
            <Box className={classes.component}>
            <Profile/>
            </Box>
       </Drawer>
    )
}
 
export default InfoDrawer
