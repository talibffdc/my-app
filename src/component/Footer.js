import { Box, Link, Typography } from '@mui/material';
import React from 'react';


export default function Footer() {

  return (
    <>
      
    <footer style={{ backgroundColor: 'black', color: '#fff', padding: '25px', textAlign: 'center', marginTop:'1%' }}>
    <Typography variant="h6">Zomato</Typography>
    <Typography variant="body2" color="inherit">
      Address: 123 Main Street, City, Country
    </Typography>
    <Typography variant="body2" color="inherit">
      Phone: 99955445477
    </Typography>
    <Typography variant="body2" color="inherit">
      Email: info@example.com
    </Typography>
    <Typography variant="body2" color="inherit">
      Follow us:
      <Link href="#" color="inherit" style={{ marginLeft: '4px' }}>Facebook</Link>
      <Link href="#" color="inherit" style={{ marginLeft: '4px' }}>Twitter</Link>
      <Link href="#" color="inherit" style={{ marginLeft: '4px' }}>Instagram</Link>
    </Typography>


    
  </footer>

  </>
  );
}