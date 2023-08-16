import { Typography, Box } from '@mui/material';
import GoToButton from '../Buttons/PrimaryButton/GoToButton/GoToButton';

const BlogsContactSection = () => {
   return (
      <Box>
         <Typography variant='h6'>
            If you have any queries or need assistance, feel free to get in
            touch with us:
         </Typography>

         <Typography variant='body1' sx={{ mt: 1 }}>
            Whatsapp: +91-8976588792
         </Typography>
         <Typography variant='body1'>Email: support@solruf.com</Typography>
         <Typography variant='body1'>Call: +91-8600694140</Typography>

         <Typography variant='subtitle1' sx={{ mt: 2 }}>
            You can also refer to our Marketplace for Solar Products &
            Installation Services at:
         </Typography>

         <GoToButton url='https://www.solruf.com/products'>
            EXPLORE SOLAR PRODUCTS
         </GoToButton>

         <Typography variant='subtitle2' sx={{ mt: 2 }}>
            Thank you,
         </Typography>
         <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
            Sumit
         </Typography>
         <Typography variant='subtitle2'>Founder & CEO @ Solruf</Typography>

         <GoToButton url='https://www.solruf.com'>
            VISIT SOLRUF WEBSITE
         </GoToButton>
      </Box>
   );
};

export default BlogsContactSection;
