import { Box, Paper, TableContainer, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material';
import GoToButton from '@/components/Buttons/PrimaryButton/GoToButton/GoToButton';
import { goToWhatsapp } from '@/utils/utils';


const useStyles = makeStyles((theme) => ({
   blogContainer: {
      padding: theme.spacing(3),
   },
   header: {
      marginBottom: theme.spacing(2),
   },
   table: {
      marginTop: theme.spacing(2),
   },
   contactSection: {
      marginTop: theme.spacing(4),
   },
}));

const data = [
   { capacity: '3 एचपी ', priceOpen: ' 19380', priceSCST: '9690 ' },
   { capacity: '5 एचपी ', priceOpen: '26975 ', priceSCST: '13488' },
   { capacity: '7.5 एचपी ', priceOpen: '37440', priceSCST: '18720' },
];

const Hindi = () => {
   const classes = useStyles();

   return (
      <Box className={classes.blogContainer}>
         <Typography variant='h4' component='h1' className={classes.header}>
            ब्लॉग लिंक यूआरएल - कुसुम-सौर-पंप-महाराष्ट्र
         </Typography>

         <Typography variant='subtitle1'>
            सौर ऊर्जा से चलने वाला पंप फोटोवोल्टिक तकनीक का उपयोग करता है जो सतह
            या भूमिगत जल को खींचने के लिए सौर ऊर्जा को बिजली में परिवर्तित करता
            है। इसलिए सौर जल पंप डीजल पानी के विपरीत ग्रिड ऊर्जा निर्भरता को
            स्थायी रूप से दूर करते हैं। सौर जल पंप सौर मॉड्यूल द्वारा संचालित
            होता है जो सतह या भूजल को सिंचाई के लिए बाहर निकालने में मदद करता
            है।
         </Typography>

         <Typography variant='subtitle1'>
            कुसुम महौर्जा योजना के तहत सोलर पंप महाराष्ट्र में 95% सब्सिडी के
            साथ उपलब्ध है। आप लिंक पर कुसुम सोलर पंप एप्लिकेशन का उपयोग कर सकते
            हैं:
         </Typography>

         <GoToButton url='https://kusum.mahaurja.com/solar/beneficiary/register/Kusum-Yojana-Component-B'>
            Apply for KUSUM MAHAURJA Solar Pump
         </GoToButton>

         <Typography variant='h6' className={classes.header}>
            योजना के तहत सब्सिडी वाले सौर पंप मूल्य निर्धारण का उल्लेख नीचे किया
            गया है:
         </Typography>

         <TableContainer
            component={Paper}
            elevation={2}
            className={classes.table}
            sx={{ p: 2 }}
         >
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>
                        <Typography variant='subtitle1'>क्षमता</Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant='subtitle1'>कीमत (ओपन)</Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant='subtitle1'>
                           कीमत (एससी/एसटी)
                        </Typography>
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {data.map((row, index) => (
                     <TableRow
                        key={index}
                        sx={{
                           backgroundColor:
                              index % 2 === 0 ? '#ffffff' : '#f5f5f5',
                        }}
                     >
                        <TableCell>
                           <Typography variant='subtitle1'>
                              {row.capacity}
                           </Typography>
                        </TableCell>
                        <TableCell>
                           <Typography variant='subtitle1'>
                              {row.priceOpen} आईएनआर
                           </Typography>
                        </TableCell>
                        <TableCell>
                           <Typography variant='subtitle1'>
                              {row.priceSCST} आईएनआर
                           </Typography>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>

         <Typography variant='h6' sx={{ mt: 3 }} className={classes.header}>
            कुसुम महौर्जा सोलर पंप योजना के लिए आवश्यक दस्तावेज हैं:
         </Typography>

         <Box
            component='ul'
            sx={{
               '& li': {
                  fontSize: '1rem',
                  mt: 0,
               },
            }}
         >
            <li>आधार कार्ड</li>
            <li>
               खसरा खतौनी या 7/12 उद्धरण (उटारा) दस्तावेज़ सहित एक भूमि
               दस्तावेज़
            </li>
            <li>एक बैंक खाता पासबुक</li>
            <li>एक घोषणा पत्र</li>
            <li>मोबाइल नंबर</li>
            <li>जल स्रोत प्रमाण</li>
            <li>पासपोर्ट साइज फोटो</li>
         </Box>

         <Typography variant='subtitle1' className={classes.contactSection}>
            आवेदन शुल्क 100 रुपये है। आवेदन पूरा करने के बाद, आपको सरकारी
            प्राधिकरण द्वारा ओटीपी के बारे में सूचित किया जाएगा। कृपया ओटीपी
            ऑनलाइन जमा करें और पसंदीदा सोलर पंप विक्रेता का चयन करें।
         </Typography>
         <Typography variant='subtitle1' className={classes.contactSection}>
            ओटीपी जमा करने के बाद, प्रासंगिक विक्रेता प्रतिनिधि शीघ्र ही आपसे
            संपर्क करेगा।
         </Typography>
         <Typography variant='subtitle1' className={classes.contactSection}>
            किसी भी प्रश्न के मामले में हमसे बेझिझक संपर्क करें:
         </Typography>

         <GoToButton url='https://www.solruf.com/solar-pump-form'>
            Create A Kusum Yojana Solar Pump Query With Us
         </GoToButton>

         <Typography
            variant='subtitle1'
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={goToWhatsapp}
         >
            Whatsapp: +91-8976588792
         </Typography>

         <Typography variant='subtitle1'>Email: support@solruf.com</Typography>

         <Typography variant='subtitle1'>Call: +91-8600694140</Typography>

         <Typography variant='subtitle1' className={classes.contactSection}>
            संदेश प्रारूप: नमस्ते! मैं SOLRUF के बारे में अधिक जानना चाहता हूं
            या सौर उत्पाद खरीदना चाहता हूं। क्या आप इसमें हमारी मदद कर सकते हैं?
         </Typography>

         <GoToButton url='https://www.solruf.com/products'>
            सौर उत्पादों का अन्वेषण करें
         </GoToButton>

         <Typography variant='subtitle1'>धन्यवाद,</Typography>

         <Typography variant='subtitle2'>Sumit</Typography>

         <Typography variant='subtitle2'>Founder & CEO @ Solruf</Typography>

         <GoToButton url='https://www.solruf.com'>
            सोलरूफ वेबसाइट पर जाएं
         </GoToButton>
      </Box>
   );
};

export default Hindi;
