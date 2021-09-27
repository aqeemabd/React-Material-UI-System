import React from 'react'
import { makeStyles } from '@material-ui/core'


// Using makeStyles function from Material-Ui
const useStyles = makeStyles ({
    sideMenu:  {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    }
})

export default function SideMenu() {
    const classes = useStyles()

    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}


// Using withStyles function from Material-Ui, make sure to import import { withStyles } from '@material-ui/core'
// const useStyles = {
//     sideMenu:  {
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'absolute',
//         left: '0px',
//         width: '320px',
//         height: '100%',
//         backgroundColor: '#253053',
//     }
// }

// const SideMenu = (props) => {

//     const {classes} = props

//     return (
//         <div className={classes.sideMenu}>
            
//         </div>
//     )
// }

// export default withStyles(useStyles)(SideMenu)