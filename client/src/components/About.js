import { Box, Typography } from '@mui/material';
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const About = () => {
  return (
    <Box component="flex" marginRight="20%" marginLeft="20%" justifyContent="center" alignItems="center" textAlign="center"  className='about-box about-section' color="white"  >
    <div className='intro'>
        <Typography variant="h3" component="div"  data-aos="fade-up"> Hey, I'm <span className='name'>Aryan </span> </Typography>
        <Typography variant="h2" component="div"  data-aos="fade-in"> A Full-Stack Engineer </Typography>
        
        <Typography variant="h6" component="div"  data-aos="zoom-in" marginTop="1.2rem" padding="5px"> I am currently in my final year, pursuing my Master's in Mathematics and Computing from BIT Mesra. I love playing around with technologies to build efficient and scalable solutions to some of the most complex technical business problems.</Typography>
     
    </div>

    
    </Box>

  )
}

export default About;