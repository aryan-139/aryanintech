import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar  sx={{ backgroundColor: 'transparent' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left-aligned text */}
        <div>
          <Typography variant="h5" component="div" color="white" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
            aryanintech
          </Typography>
        </div>
        {/* Center-aligned buttons */}
        <div>
          <Button component={Link} to="/home" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px' }}>
            About
          </Button>
          <Button component={Link} to="/about" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px' }}>
            Timeline
          </Button>
          <Button component={Link} to="/about" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px' }}>
            Skills
          </Button>
          <Button component={Link} to="/about" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px' }}>
            Projects
          </Button>
          <Button component={Link} to="/contact" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px' }}>
            Contact
          </Button>
          <Button component={Link} to="/about" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px' }}>
            Resume
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
