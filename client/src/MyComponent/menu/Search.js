import React from 'react'
import {Box,makeStyles,InputBase,} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles( theme=>({
   
    firstchildson3: {
      
        border: "1px solid white",
        height: "43px",
        justifyContent: "center",
        alignItems:"center",
        width: "100%",
        display: "flex",
        position:'relative'
    },
    SearchIcon: {
        paddingLeft: 28,
        paddingRight: 21,
        display: 'flex',
        color: '#919191',
        alignItems: 'center',
    },
    input: {
        marginRight: 104,
        marginLeft: 23,
       

    },
    search: {
        position: 'relative',
        borderRadius: 20,
        width: '100%',
         color: '#919191',
        margin:"0 20px"
        
        
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        color: '#919191',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width:"100%"
      },
      inputInput: {
        fontSize: 14,
        width: '85%',
        
        borderRadius:50,
        height:15,
        paddingLeft:30
        
      },
      component:{
        background:"#ededed",
      }
}))
export const Search = ({settext}) => {
    const className=useStyles();
    return (
      <Box className={className.component}>
        <Box className={className.firstchildson3}>
            <Box >
                <SearchIcon className={className.SearchIcon}/>
            </Box>
         <InputBase
              placeholder="search or start new chat"
              classes={{
                root: className.inputRoot,
                input: className.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>settext(e.target.value)}
            />
    </Box>
    </Box>
    )
}
