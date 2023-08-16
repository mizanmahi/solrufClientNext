import { Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const glowAnimation = keyframes`
  0% {
    opacity: 0.5;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  100% {
    opacity: 0.5;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

const FancyText = ({ children }) => {
   return (
      <Typography
         variant='h4'
         sx={{
            fontWeight: 'bold',
            animation: `${glowAnimation} 2s infinite`,
         }}

      >
         {children}
      </Typography>
   );
};

export default FancyText;
