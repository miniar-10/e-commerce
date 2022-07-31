import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

function Navbar({totalItems}) {
   
    return (
        <div>
            <AppBar position='fixed'  color='inherit' style={{height:'64px'}}>
                <Toolbar style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'94%'}}>
                    <h1 style={{ fontSize:'3rem' ,margin: 0,top: '-8px',
                    position: 'relative'}}>p-<span style={{color:'#fc0159'}}>easy</span>
                    </h1>
                    <Link to ='/card'>
                        <IconButton aria-label='Show card items' className="card" >
                            <Badge className='badge' badgeContent={totalItems} >
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </Badge>

                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
