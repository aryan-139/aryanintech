import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position='fixed'  sx={{ backgroundColor: 'transparent' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        {/* Center-aligned buttons */}
        <div>
        <Button component={Link} to="/" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px', '&:hover': { color: 'orange' } }}>
            Home
          </Button>
        <Button component={Link} to="/about" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px', '&:hover': { color: 'orange' } }}>
            About
          </Button>
          <Button component={Link} to="/timeline" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px', '&:hover': { color: 'orange' } }}>
            Timeline
          </Button>
          <Button component={Link} to="/skills" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px', '&:hover': { color: 'orange' } }}>
            Skills
          </Button>
          {/* <Button component={Link} to="/projects" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px', '&:hover': { color: 'orange' } }}>
            Projects
          </Button> */}
          <Button component={Link} to="/contact" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px', '&:hover': { color: 'orange' } }}>
            Contact
          </Button>
          <Button href="https://drive.google.com/file/d/124bFbuBcashy5awaIRWBBBlEwfS-X6_S/view?usp=sharing" color="inherit" sx={{ color: 'white', mx: 1, fontSize: '16px' , '&:hover': { color: 'orange' }}}>
            Resume
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
