import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import BlogsTopIntroSection from '@/components/pages/Blogs/BlogsTopIntroSection';
import English from '@/components/pages/Blogs/maintenance/English';
import Hindi from '@/components/pages/Blogs/maintenance/Hindi';
import { Box, Container, styled } from '@mui/material';
import Head from 'next/head';

import { useState } from 'react';


const Wrapper = styled(Box)(({ theme }) => ({
   // background: '#D0D7D9',
}));

const SolarMaintenance = () => {
   const [language, setLanguage] = useState('en');

   return (
      <Wrapper>
         
         <Head>
            <meta name='title' content='Solar panel maintenance' />
            <meta property='og:title' content='Solar panel maintenance' />
            <meta
               name='description'
               content='Solar panel maintenance is very easy. We will tell you what you need to do, and how often to keep solar panel working efficiently.'
            />
            <title>Blog - Solar Maintenance</title>
         </Head>
         <BlogsTopIntroSection title='Solar Maintenance' />

         <Box sx={{ mx: 'auto', width: 200, mb: 1 }}>
            <LanguageSelector setLanguage={setLanguage} language={language} />
         </Box>
         <Container maxWidth='lg'>
            {language === 'en' ? <English /> : <Hindi />}
         </Container>
      </Wrapper>
   );
};

export default SolarMaintenance;
