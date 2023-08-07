import { Box, Typography } from '@mui/material';
import React from 'react';
import AOS from 'aos';

AOS.init();

const Skills = () => {
  return (
    <Box
      component="div"
      style={{
        marginRight: '20%',
        marginLeft: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
      }}
      className='app-container'
    >
      <div className='intro'>
        <Typography variant="h2" component="div" data-aos="fade-in">
          Skills
        </Typography>

        <Typography variant="h6" component="div" data-aos="flip-left" marginTop="1.2rem" padding="5px">
          <u><b>Programming Languages:</b></u> Python, C++, Java, JavaScript, HTML, CSS, SQL
        </Typography>

        <Typography variant="h6" component="div" data-aos="flip-right" marginTop="1.2rem" padding="5px">
          <u><b>Frameworks:</b></u> React, Node.js, Express.js, Bootstrap, Material UI, Git, GitHub, Heroku, Netlify, MongoDB, MySQL, Firebase, Google Cloud Platform, AWS, Azure, Docker, Kubernetes, Linux, Windows, Mac OS
        </Typography>

        <Typography variant="h6" component="div" data-aos="flip-left" marginTop="1.2rem" padding="5px">
          <u><b>Databases:</b></u> MongoDB, MySQL
        </Typography>

        <Typography variant="h6" component="div" data-aos="flip-left" marginTop="1.2rem" padding="5px">
          <u><b>Dev Tools and Methodologies:</b></u> Visual Studio Code, Git, Gitlab, LaTeX, Docker, Asana, JIRA, AGILE, SCRUM, Kanban
        </Typography>

        <Typography variant="h6" component="div" data-aos="flip-left" marginTop="1.2rem" padding="5px">
          <u><b>Miscellaneous:</b></u> System Design, Open Source Contributor, Data Structures
        </Typography>
      </div>
    </Box>
  );
}

export default Skills;
