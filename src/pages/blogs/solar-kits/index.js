import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import BlogsTopIntroSection from '@/components/pages/Blogs/BlogsTopIntroSection';
import English from '@/components/pages/Blogs/solar-kits/English';
import Hindi from '@/components/pages/Blogs/solar-kits/Hindi';
import { Container, styled } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import BlogIntroSection from '../../../components/BlogIntroSection/BlogIntroSection';
// import PageTitle from '../../../components/PageTitle/PageTitle';
// import LanguageSelector from '../../../components/LanguageSelector/LanguageSelector ';
// import English from './English';
// import Hindi from './Hindi';

const Wrapper = styled(Box)(({ theme }) => ({
   background: theme.palette.primary.light,
}));

const SolarKits = () => {
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
            title='SOLAR Kits'
            sx={{ mb: 8 }}
            backgroundImageUrl='https://i.ibb.co/Bg5qGGm/Whats-App-Image-2023-06-21-at-02-44-57.jpg'
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

export default SolarKits;
