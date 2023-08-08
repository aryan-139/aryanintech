import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './Timeline.css'; // Import your custom CSS file for timeline styling

const Timeline = () => {
  return (
    <div className='app-container'>
      <Typography variant="h2" component="div" color="white" data-aos="fade-in"> Timeline </Typography>
      <br />

      <Box className="timeline-container">
        <Box className="timeline">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box className="timeline-box">
                <Typography variant="h4" color="white" data-aos="fade-up">DeepSight AI Labs</Typography>
                <Typography variant="h6" color="white" data-aos="fade-up">Software Development Engineer Intern</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="white" className="timeline-year" data-aos="fade-up">July, 2023 - Present</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className="timeline-box">
                <Typography variant="h4" color="white" data-aos="fade-up">Zipy.ai</Typography>
                <Typography variant="h6" color="white" data-aos="fade-up">Technical Content Engineer Intern</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="white" className="timeline-year" data-aos="fade-up">January, 2023 - April, 2023</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className="timeline-box">
                <Typography variant="h4" color="white" data-aos="fade-up">Prowess</Typography>
                <Typography variant="h6" color="white" data-aos="fade-up">Software Development Engineer Intern</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" color="white" className="timeline-year" data-aos="fade-up">July, 2022 - August, 2022</Typography>
            </Grid>
            {/* Repeat the above Grid structure for other experiences */}
          </Grid>
        </Box>
      </Box>

    </div>
  );
};

export default Timeline;
