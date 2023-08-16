import React from 'react';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const GoToButton = ({ url, children }) => {
   const goToPage = () => {
      window.open(url, '_blank');
   };

   return (
      <Button
         sx={{
            my: 1,
            fontSize: '1rem',
            borderRadius: '20px',
            padding: '10px 20px',
            background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%) !important',
            color: '#FFFFFF',
            '&:hover': {
               textDecoration: 'underline',
               background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
               boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
            },
         }}
         variant='contained'
         endIcon={<LaunchIcon />}
         onClick={goToPage}
      >
         {children}
      </Button>
   );
};

export default GoToButton;
