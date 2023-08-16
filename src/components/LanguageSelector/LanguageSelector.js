import { Select, MenuItem, Box, Typography } from '@mui/material';

const LanguageSelector = ({ language, setLanguage }) => {
   const handleChangeLanguage = (event) => {
      const selectedLanguage = event.target.value;
      setLanguage(selectedLanguage);
   };

   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
         }}
      >
         <Typography variant='h6'>Language</Typography>
         <Select
            value={language}
            onChange={handleChangeLanguage}
            sx={{ width: '130px' }}
            size='small'
         >
            <MenuItem value='en'>English</MenuItem>
            <MenuItem value='hi'>हिन्दी</MenuItem>
         </Select>
      </Box>
   );
};

export default LanguageSelector;
