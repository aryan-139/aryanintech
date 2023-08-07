import { Box, Typography } from '@mui/material'
import React from 'react'
import AOS from 'aos';

AOS.init()

const Intro = () => {
  return (
    <Box component="flex" marginRight="20%" marginLeft="20%" justifyContent="center" alignItems="center" textAlign="center"  className='app-container' color="white"  >
    <div className='intro'>
        <Typography variant="h2" component="div"  data-aos="fade-in"> About Me </Typography>
        
        <Typography variant="h6" component="div"  data-aos="flip-left" marginTop="1.2rem" padding="5px" > I'm Aryan Raj, a penultimate-year student pursuing a Master's in Mathematics and Computing at BIT Mesra. I thrive on leveraging technology to <b>solve complex business problems.</b> My coding philosophy is language-agnostic; strong fundamentals allow me to excel across tech stacks. I prioritize industry exposure to understand developer workflows.</Typography>

        <Typography variant="h6" component="div"  data-aos="flip-right"  marginTop="1.2rem" padding="5px"> Fascinated by coding since middle school, I chose Mathematics and Computing at BIT Mesra to further my passion. To bridge the developer-customer gap, I interned with influencer Vedika Bhaia. This led to a breakthrough role at Prowess, refining my skills in multicultural teams and Software Development. My stint as a Technical Content Engineer at Zipy honed my technical depth. Currently, I'm interning at Deepsight Labs, spearheading a Visitor Management System. Exploring Deep Learning and Cloud Computing is next on my agenda. Excited for future collaborations in Hackathons and projects.</Typography>

     
    </div>

    
    </Box>
  )
}

export default Intro