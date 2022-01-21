import React , { createContext} from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'

export const Templatecontext =createContext(null)

export const Templateprovider = ({children}) => {

    const theme = createTheme({
        overrides:{
            MuiDrawer:{
                paperAnchorLeft:{
                    left: 269,
                   
                    top: 33,
                    width: 408,
                    height: 910
                    
                }
            },
            MuiBackdrop:{
                root:{
                    backgroundColor:'unset'
                }
            }
        }

    })


    return (
        <Templatecontext.Provider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Templatecontext.Provider>
    )
}
