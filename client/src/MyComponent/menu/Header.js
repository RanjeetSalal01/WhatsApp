import { useContext, useState } from 'react'

import Drawer from '../drawer/InfoDrawer'
import { Box, makeStyles } from '@material-ui/core'
import { AccountContext } from '../../context/AccountProvider';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import { Headermenu } from './Headermenu';
const useStyles = makeStyles({

    firstchildson: {
        border: "1px solid white",
        height: "90%",
        background:"#ededed",
        width: "100%",
        display: "flex",
    },

    imgcontinor: {
        display: "flex",
        marginLeft: 8,
        marginRight: 168,

        height: 48,
        padding: 8,
    },
    logo: {
        height: 50,
        width: 50,
        border: "1px solid white",
        borderRadius: 30

    },
    iconcontainor: {
        alignItems: "center",
        color: "grey",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",


        '& > *': {

            padding: 15
        }
    },
    firstchild:{
        background:"#ededed",
    }
})

export const Header = () => {

    const className = useStyles();
    const [open, setopen] = useState(false)
    const { account } = useContext(AccountContext)
    const toggledrawer = () => {
        setopen(true)
    }

    return (
        <>
            <Box className={className.firstchild}>
                {/* first child boxes */}
                <Box className={className.firstchildson}>
                    <Box className={className.imgcontinor}>
                        <img className={className.logo} onClick={() => toggledrawer()} src={account.imageUrl} alt="" />
                    </Box>
                    <Box className={className.iconcontainor}>
                        <DonutLargeIcon className={className.status} />
                        <ChatIcon className={className.chat} />
                        <Headermenu />
                    </Box>

                </Box>
            </Box>
            <Drawer open={open} setopen={setopen}/>
        </>

    )
}

