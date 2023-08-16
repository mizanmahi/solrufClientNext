import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

const BlogAccordionBody = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-around',
   alignItems: 'center',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
   },
}));
const Image = styled(Box)(({ theme }) => ({
   '& img': {
      maxWidth: '600px',
   },
}));

const BlogAccordionContent = ({ text, imageUrl, children }) => {
   return (
      <BlogAccordionBody>
         {children ? (
            children
         ) : (
            <>
               <Box>
                  <Typography>{text}</Typography>
               </Box>
               <Image>
                  <img src={imageUrl} alt='' />
               </Image>
            </>
         )}
      </BlogAccordionBody>
   );
};

export default BlogAccordionContent;
