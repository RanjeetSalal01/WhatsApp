import React from 'react'
import { clientid } from '../../constant/data';
import { useContext, useState } from 'react'
import { AccountContext } from '../../context/AccountProvider';
import { Menu, MenuItem, makeStyles } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {GoogleLogout} from 'react-google-login';
import Drawer from '../drawer/InfoDrawer'
const useStyles = makeStyles({

    menuItem: {
        fontSize: 14,
        padding: "15px 60px 5px 24px ",
        color: "grey"
    },
    logout: {
        border: "none !important",
        boxShadow: "none !important",
        ' & > * ': {
            padding: "0px !important"
        }
    }
})
export const Headermenu = () => {

    const className = useStyles();

    const { setAccount } = useContext(AccountContext)
    const [open, setOpen] = useState(false)
    const [opendrawer, setopendrawer] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleclick = (event) => {
        setOpen(event.currentTarget)
    }

    const onLogoutSuccess = () => {
        setAccount('');
        

    }
    const toggledrawer = () => {
        setopendrawer(true)
    }

    
    return (
        <>

            <MoreVertIcon onClick={handleclick} />

            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{

                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}


            >
                <MenuItem className={className.menuItem} onClick={()=>{handleClose() ; toggledrawer() }}>Profile</MenuItem>
                <MenuItem className={className.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        className={className.logout}
                        clientId={clientid}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                    >
                    </GoogleLogout>
                    </MenuItem>

            </Menu>
            <Drawer open={opendrawer} setopen={setopendrawer}/>
        </>
    )
}
