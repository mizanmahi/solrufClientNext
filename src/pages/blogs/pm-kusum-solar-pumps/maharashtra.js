import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import English from '@/components/pages/Blogs/pm-kusum-solar-pumps/English';
import Hindi from '@/components/pages/Blogs/pm-kusum-solar-pumps/Hindi';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';


const KusumSolarPumps = () => {

   const videoUrl = 'https://www.youtube.com/watch?v=6mNE1kQEjjU'; // Replace with your YouTube video URL

   // Extract the video ID from the URL
   const videoId = videoUrl.match(/v=([^&]+)/)[1];

   const [language, setLanguage] = useState('en');

   return (
      <Container>
         <Box
            sx={{
               my: 3,
               width: '100%',
               '& img': {
                  margin: '0 auto',
                  display: 'block',
                  maxWidth: '100%',
               },
            }}
         >
            {/* <img
               src='https://i.ibb.co/Dzwyjvp/pm-kusum-yojana-maharashtra-online-application-10-21-49-AM.jpg'
               alt='yojona'
            /> */}
              <Image
                           src='https://i.ibb.co/Dzwyjvp/pm-kusum-yojana-maharashtra-online-application-10-21-49-AM.jpg'
                           alt='net metering'
                           width={1200}
                           height={400}
                        />
         </Box>

         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
            }}
         >
            <iframe
               title='YouTube Video Player'
               width='560'
               height='315'
               maxWidth='100%'
               src={`https://www.youtube.com/embed/${videoId}`}
               frameBorder='0'
               allowFullScreen
            ></iframe>
         </Box>
         <Box sx={{ mx: 'auto', width: 200, mt: 5, mb: 1 }}>
            <LanguageSelector setLanguage={setLanguage} language={language} />
         </Box>
         {
            language === 'en' ? <English /> : <Hindi />
         }
      </Container>
   );
};

export default KusumSolarPumps;
