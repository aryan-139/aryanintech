import { Box, Typography } from '@mui/material';
import React from 'react';
import RoundedCard from './RoundedCard';

const Projects = () => {
  const projects = [
    { name: 'Project 1', link: 'https://project1link.com' },
    { name: 'Project 2', link: 'https://project2link.com' },
    { name: 'Project 3', link: 'https://project3link.com' },
  ];

  return (
    <Box
      component="div"
      marginRight="20%"
      marginLeft="20%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      className='app-container'
      color="white"
    >
      <Typography variant="h2" component="div" data-aos="fade-in" style={{ marginTop: '2rem' }}> Projects </Typography>
      
      <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" marginTop="1rem">
        {projects.map((project, index) => (
          <RoundedCard key={index}>
            <a href={project.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h4" component="div" data-aos="fade-in">{project.name}</Typography>
            </a>
          </RoundedCard>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
