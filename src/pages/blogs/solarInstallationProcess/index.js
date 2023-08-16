import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import BlogsTopIntroSection from '@/components/pages/Blogs/BlogsTopIntroSection';
import Hindi from '@/components/pages/Blogs/solarInstallationProcess/Hindi';
import English from '@/components/pages/Blogs/solarInstallationProcess/English';
import { Container, styled } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import React, { useState } from 'react';

const Wrapper = styled(Box)(({ theme }) => ({
   background: theme.palette.primary.light,
}));

const SolarInstallationProcess = () => {
   const [language, setLanguage] = useState('en');

   return (
      <Wrapper>
         <Head>
            <meta name='title' content='Solar Installation Process' />
            <meta property='og:title' content='Solar Installation Process' />
            <meta
               name='description'
               content='Solar installation process takes two to three days, depending on the size of the solar system. Go through the installation process mentioned to get an idea about solar system installation.'
            />
            <title>Blog - Solar Installation Process</title>
         </Head>
         <BlogsTopIntroSection
            title='SOLAR INSTALLATION PROCESS'
            sx={{ mb: 8 }}
            backgroundImageUrl='https://i.ibb.co/QjvsMp5/image-6-3.png'
         />
         <Box sx={{ mx: 'auto', width: 200 }}>
            <LanguageSelector setLanguage={setLanguage} language={language} />
         </Box>
         <Container maxWidth='lg' sx={{ padding: { sm: '20px', xs: 0 } }}>
            {language === 'en' ? <English /> : <Hindi />}
         </Container>
      </Wrapper>
   );
};

export default SolarInstallationProcess;
