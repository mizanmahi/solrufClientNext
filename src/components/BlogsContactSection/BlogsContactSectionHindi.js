import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import {
   WhatsApp as WhatsAppIcon,
   Email as EmailIcon,
   Phone as PhoneIcon,
} from '@mui/icons-material';

const BlogsContactSectionHindi = () => {
   return (
      <Box>
         <Typography variant='body1' gutterBottom>
            यदि आपके कोई प्रश्न हैं या सहायता की आवश्यकता है, तो बेझिझक हमसे
            संपर्क करें:
         </Typography>
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <WhatsAppIcon />
            <Link
               href='https://wa.me/+918976588792'
               target='_blank'
               rel='noreferrer'
            >
               <Typography variant='body2'>+91-8976588792</Typography>
            </Link>
         </Box>
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon />
            <Link
               href='mailto:support@solruf.com'
               target='_blank'
               rel='noreferrer'
            >
               <Typography variant='body2'>support@solruf.com</Typography>
            </Link>
         </Box>
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <PhoneIcon />
            <Link href='tel:+918600694140' target='_blank' rel='noreferrer'>
               <Typography variant='body2'>+91-8600694140</Typography>
            </Link>
         </Box>
         <Typography variant='body1' gutterBottom>
            आप सौर उत्पादों के लिए हमारे मार्केटप्लेस को भी देख सकते हैं
         </Typography>
      </Box>
   );
};

export default BlogsContactSectionHindi;
