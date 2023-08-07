import { Box, Typography } from '@mui/material';
import React from 'react';
import RoundedCard from './RoundedCard';

const Contact = () => {

  return (
    <Box
      component="flex"
      marginRight="20%"
      marginLeft="20%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      className='app-container'
      color="white"
    >
      <div className='intro'>
        <Typography variant="h2" component="div" data-aos="fade-in"> Contact </Typography>
        <Box mt={3}>

          <Typography variant="h6" component="div" data-aos="flip-left" padding="5px">
            <b>Email:</b>
 
            <a href="mailto:aryanraj2k25@gmail.com" style={{ color: 'white' }}> aryanraj2k25@gmail.com</a>
          </Typography>
          <Typography variant="h6" component="div" data-aos="flip-left" padding="5px">
            <b>LinkedIn:</b>
         
            <a href="https://www.linkedin.com/in/aryanraj24/" style={{ color: 'white' }}>aryanraj24</a>
          </Typography>
          <Typography variant="h6" component="div" data-aos="flip-left" padding="5px">
            <b>GitHub:</b>
 
            <a href="https://github.com/aryan-139" style={{ color: 'white' }}>aryan-139</a>
          </Typography>
          <Typography variant="h6" component="div" data-aos="flip-left" padding="5px">
            <b>Twitter:</b>
       
            <a href="https://twitter.com/desikiteretsu_" style={{ color: 'white' }}>aryanintech</a>
          </Typography>
        </Box>
      </div>
    </Box>
  );
}

export default Contact;
