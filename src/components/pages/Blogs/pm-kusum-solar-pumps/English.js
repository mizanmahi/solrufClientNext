import { Box, Paper, TableContainer, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material';
import { goToWhatsapp } from '@/utils/utils';
import GoToButton from '@/components/Buttons/PrimaryButton/GoToButton/GoToButton';

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
   { capacity: '3 Hp', priceOpen: '19380', priceSCST: '9690' },
   { capacity: '5 HP', priceOpen: '26975', priceSCST: '13488' },
   { capacity: '7.5 HP', priceOpen: '37440', priceSCST: '18720' },
];

const English = () => {
   const classes = useStyles();

   return (
      <Box className={classes.blogContainer}>
         <Typography variant='h4' component='h1' className={classes.header}>
            Solar Water Pumps: A Sustainable Irrigation Solution
         </Typography>

         <Typography variant='subtitle1'>
            A solar-powered pump utilizes photovoltaic technology to convert
            solar energy into electricity, enabling the extraction of surface or
            underground water for various purposes, including irrigation. Solar
            water pumps offer a sustainable alternative to diesel-powered pumps,
            reducing dependency on grid energy and promoting eco-friendly
            practices in agriculture.
         </Typography>

         <Typography variant='subtitle1'>
            In Maharashtra, solar pumps under the KUSUM MAHAURJA YOJANA are
            available with a 95% subsidy. To access the Kusum Solar Pump
            application, click the button below:
         </Typography>

         <GoToButton url='https://kusum.mahaurja.com/solar/beneficiary/register/Kusum-Yojana-Component-B'>
            Apply for KUSUM MAHAURJA Solar Pump
         </GoToButton>

         <Typography variant='h6' className={classes.header}>
            Subsidized Solar Pump Pricing:
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
                        <Typography variant='subtitle1'>Capacity</Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant='subtitle1'>
                           Price (Open)
                        </Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant='subtitle1'>
                           Price (SC/ST)
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
                              {row.priceOpen} INR
                           </Typography>
                        </TableCell>
                        <TableCell>
                           <Typography variant='subtitle1'>
                              {row.priceSCST} INR
                           </Typography>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>

         <Typography variant='h6' sx={{ mt: 3 }} className={classes.header}>
            Documents Required for the KUSUM MAHAURJA Solar Pump scheme are:
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
            <li>Aadhar card</li>
            <li>
               Land document including KhasraKhatauni or 7/12 Extract (Utara)
               Document
            </li>
            <li>Bank account passbook</li>
            <li>Declaration form</li>
            <li>Mobile number</li>
            <li>Water source proof</li>
            <li>Passport size photo</li>
         </Box>

         <Typography variant='subtitle1' className={classes.contactSection}>
            The application fees is 100 Inr. After the application is filled,
            you will be notified with the OTP with the Government authority.
            Please submit the OTP online and select the preferred Solar Pump
            vendor.
         </Typography>
         <Typography variant='subtitle1' className={classes.contactSection}>
            After the OTP submission, the relevant Vendor representative will
            get in touch with you shortly.
         </Typography>
         <Typography variant='subtitle1' className={classes.contactSection}>
            If you have any queries or need assistance, feel free to get in
            touch with us:
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
            You can also refer to our Marketplace for Solar Products &
            Installation Services at:
         </Typography>

         <GoToButton url='https://www.solruf.com/products'>
            Explore Solar Products
         </GoToButton>

         <Typography variant='subtitle1'>Thank you,</Typography>

         <Typography variant='subtitle2'>Sumit</Typography>

         <Typography variant='subtitle2'>Founder & CEO @ Solruf</Typography>

         <GoToButton url='https://www.solruf.com'>
            Visit Solruf Website
         </GoToButton>
      </Box>
   );
};

export default English;
