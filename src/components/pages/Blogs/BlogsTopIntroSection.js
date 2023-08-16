import React from 'react';
import { IconButton, Link, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
   IntroSection,
   IntroTitle,
   IntroTitle2,
   OverLay,
   SocialBox,
} from './BlogsTopIntroSection.style';

const BlogsTopIntroSection = ({
   title,
   backgroundImageUrl,
   subtitle,
   sx,
   icon,
}) => {
   return (
      <IntroSection
         sx={{
            ...sx,
            backgroundImage: backgroundImageUrl
               ? `url(${backgroundImageUrl})`
               : 'url(https://i.ibb.co/ZXMgkjT/image-6.png)',
         }}
      >
         <OverLay />
         <SocialBox>
            <Typography variant='h6'>Share</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <Link
                  href='https://www.instagram.com/solrufco/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <IconButton>
                     <InstagramIcon />
                  </IconButton>
               </Link>
               <Link
                  href='https://www.linkedin.com/company/solruf/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <IconButton>
                     <LinkedInIcon />
                  </IconButton>
               </Link>
               <Link
                  href='https://www.youtube.com/channel/UCwQlCuStfqD7eP_rxAsYs6w'
                  target='_blank'
                  rel='noreferrer'
               >
                  <IconButton>
                     <YouTubeIcon />
                  </IconButton>
               </Link>
               <Link
                  href='https://www.facebook.com/SolrufIndia'
                  target='_blank'
                  rel='noreferrer'
               >
                  <IconButton>
                     <FacebookIcon />
                  </IconButton>
               </Link>
            </Box>
         </SocialBox>
         {!subtitle && <IntroTitle>{title?.toUpperCase()}</IntroTitle>}
         {subtitle && (
            <IntroTitle2>
               {title} <br />
               {icon} {subtitle}
            </IntroTitle2>
         )}
      </IntroSection>
   );
};

export default BlogsTopIntroSection;
