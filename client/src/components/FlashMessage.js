import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const textList = [
  'Life is too short to write documentation.',
  'Just Kidding. Go document your code.',
  "Where's your will to be weird?",
];

const FlashMessage = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (text.length < textList[index].length) {
          setText((prevText) => prevText + textList[index][text.length]);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setText('');
            setIndex((prevIndex) => (prevIndex + 1) % textList.length);
          }, 4000); // Wait for 4 seconds before backspacing
        }
      } else {
        if (text.length > 0) {
          setText((prevText) => prevText.slice(0, -1));
        } else {
          setIsTyping(true);
          setIndex((prevIndex) => (prevIndex + 1) % textList.length);
        }
      }
    }, 100); // Typing speed in milliseconds

    return () => clearInterval(interval);
  }, [index, isTyping, text]);

  return (
    <Box justifyContent="center" marginTop="25%" marginBottom="0%"
    sx={{
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1,

    }}
    >
       <div className="typewriter-container">
      <Typography variant="h3" component="div" color="white" className="typewriter" sx={{ fontFamily: 'Times New Roman, serif' }}>
        {text}
      </Typography>
    </div>
    </Box>
   
  );
};

export default FlashMessage;
