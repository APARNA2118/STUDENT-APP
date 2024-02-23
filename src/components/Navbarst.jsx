import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbarst = () => {
  return (
    <div>
        <AppBar position="static">
                <Toolbar>
                    <Typography variant ='h6' sx={{ flexGrow: 1 }} align='left'>
                        STUDENT APP
                    </Typography>
                    <Button >
                        
                        <Link to='/' style={{color:'white'}}>LOGIN</Link>
                    </Button>
                    <Button >
                        
                        <Link to='/add' style={{color:'white'}}>ADD STUDENT</Link>
                    </Button>
                    {/* <Button >
                        
                        <Link to='/add2' style={{color:'white'}}>ADD</Link>
                    </Button> */}
                    {/* <Button >
                        
                        <Link to='/view' style={{color:'white'}}>VIEW STUDENT</Link> 
                    </Button> */}
                    <Button >
                        
                        <Link to='/apist' style={{color:'white'}}>VIEW STUDENT</Link> 
                    </Button>
                   
                    
                </Toolbar>
        </AppBar>

    </div>
  )
}

export default Navbarst