import React from 'react'
import Box from '@mui/material/Box';
import { Button, Container, IconButton } from '@mui/material';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';


export default function navbar() {
  return (
    <Container>

    
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center' }}>
     <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <Box>
          <img src='/images/download.png' style={{width:'60%'}}/>
      </Box>

      <Box>
      <div className="search-bar-container">
      <div className="logo-container">
      </div>
      <div className="search-input-container">
        <input style={{width:'390px'}}
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-button" style={{marginLeft:'10px'}}>Search</button>
      </div>
    </div>
        </Box> 
      </Box>
      
      <Box>
        <Button> Login</Button>
        <Button> Sign up</Button>
      </Box>

      <IconButton >
       <AddShoppingCart/>
      </IconButton>

    </Box>
    <Box sx={{backgroundImage:'url(/images/background.jpg)' }} style={{height:'255px', width:'98%'}}></Box>
   
    </Container>

    
    
    
  )
}
