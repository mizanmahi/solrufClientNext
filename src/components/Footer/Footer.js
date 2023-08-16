import {
    Container,
    Grid,
    styled,
    Typography,
    useMediaQuery,
 } from '@mui/material';
 import { Box } from '@mui/system';
 import React from 'react';
//  import { Link } from 'react-router-dom';
 import LocationOnIcon from '@mui/icons-material/LocationOn';
 import EmailIcon from '@mui/icons-material/Email';
 import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';
 import InstagramIcon from '@mui/icons-material/Instagram';
 // import { HashLink } from 'react-router-hash-link';
 import YouTubeIcon from '@mui/icons-material/YouTube';
 
 import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
 
 const FooterWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    paddingTop: '2.5rem',
 }));
 
 const FooterTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.light,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottom: '2px solid #ffd05b',
    display: 'inline-block',
    paddingRight: '1.5rem',
    marginBottom: '.7rem',
 }));
 
 const LinkList = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.light,
    display: 'block',
    textDecoration: 'none',
    '&:hover': {
       color: theme.palette.primary.main,
       textDecoration: 'none',
    },
 }));
 
 const LinkListWithIcon = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.light,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    '&:hover': {
       color: theme.palette.primary.main,
       textDecoration: 'none',
    },
 }));
 
 const SocialIcons = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '.5rem 0',
 }));
 
 const BottomFooter = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    padding: '1rem 0',
    marginTop: '1.5rem',
 }));
 
 const Footer = () => {
    // const matches = useMediaQuery((theme) => theme?.breakpoints?.down('sm'));
    const matches = false;
    return (
       <FooterWrapper>
          <Container sx={{ pb: 2 }}>
             <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={3}>
                   <Box
                      sx={{
                         display: matches ? 'flex' : 'block',
                         justifyContent: 'center',
                      }}
                   >
                      <img
                         src='https://i.ibb.co/CzpgVFq/51.png'
                         alt='logo'
                         style={{
                            maxWidth: '100%',
                            width: '300px',
                            height: 'auto',
                         }}
                      />
 
                      {!matches && (
                         <Box>
                            <a
                               href='https://www.fieo.org/certificateview.php?memberfieo2009token=OvC4etKfCP_116295'
                               target='_blank'
                               rel='noreferrer'
                            >
                               <img
                                  src='https://solruf.s3.ap-south-1.amazonaws.com/fieo_logo.svg'
                                  alt=''
                                  style={{
                                     maxWidth: '150px',
                                     width: '150px',
                                     height: '80px',
                                     marginTop: '1rem',
                                     marginLeft: '1rem',
                                  }}
                               />
                            </a>
                         </Box>
                      )}
                   </Box>
                   <Typography
                      sx={{
                         color: '#fff',
                         fontSize: '1rem',
                         fontWeight: 'bold',
                         textTransform: 'uppercase',
                         marginTop: '1rem',
                         pl: 1.7,
                      }}
                   >
                      we are on ondc network
                   </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={6}>
                   <Grid
                      container
                      item
                      spacing={2}
                      rowSpacing={5}
                      // justifyContent='center'
                   >
                      <Grid item xs={6} sm={6} md={6} lg={4}>
                         <FooterTitle>Company</FooterTitle>
                         <LinkList component={Link} href='/'>
                            Home
                         </LinkList>
                         <LinkList component={Link} href='/about-us'>
                            About Us
                         </LinkList>
 
                         <LinkList component={Link} href='/'>
                            Procurement
                         </LinkList>
                         <LinkList component={Link} href='/'>
                            Tenders
                         </LinkList>
                         <LinkList component={Link} href='/contact-us'>
                            Contact Us
                         </LinkList>
                         <LinkList component={Link} href='/solar-calculator'>
                            Solar EMI Calculator
                         </LinkList>
                         <LinkList  component='a' href='https://calendly.com/solruf/solruf-site-visit'>
                            Book a solar session
                         </LinkList>
                         <LinkList  component={Link} href='/links-solruf'>
                            Links.solruf.com
                         </LinkList>
                      </Grid>
 
                      <Grid item xs={6} sm={6} md={6} lg={4}>
                         <FooterTitle>Blog</FooterTitle>
                         <LinkList component={Link} href='/blogs/typesOfPvSystems'>
                            Types of PV Systems
                         </LinkList>
                         <LinkList component={Link} href='/blogs/solarSteps'>
                            Steps before Solar Installation
                         </LinkList>
                         <LinkList
                            component={Link}
                            href='/blogs/solarInstallationProcess'
                         >
                            Solar Installation
                         </LinkList>
                         <LinkList component={Link} href='/blogs/solarComponents'>
                            Components used in Solar Installation
                         </LinkList>
                         <LinkList component={Link} href='/blogs/maintenance'>
                            Solar Panel Maintenance
                         </LinkList>
                         <LinkList component={Link} href='/blogs/kwattCourses'>
                            KWatt Courses
                         </LinkList>
                      </Grid>
 
                      <Grid item xs={6} sm={6} md={6} lg={4}>
                         <FooterTitle>Legal Info </FooterTitle>
                         <LinkList component={Link} href='/privacyPolicy'>
                            Privacy Policy
                         </LinkList>
                      </Grid>
 
                      <Grid item xs={6} sm={6} md={6} lg={4}>
                         <FooterTitle>Sell On Solruf</FooterTitle>
                         <LinkList component={Link} href='/'>
                            Become a Vendor
                         </LinkList>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={4}>
                         <FooterTitle>Enterprise Login</FooterTitle>
                         <LinkList component={Link} href='/enterprise-login'>
                            Login
                         </LinkList>
                         <LinkList component={Link} href='/solar-pump-form'>
                            Solar Pump Form
                         </LinkList>
                         <LinkList component={Link} href='/solar-design-payment'>
                            Solar Design Payment
                         </LinkList>
                         <LinkList component={Link} href='/solar-pump-payment'>
                            Solar Pump Payment portal
                         </LinkList>
                         <LinkList component={Link} href='/solar-enquiry-form'>
                            Solar Enquiry Form
                         </LinkList>
                         <LinkList component={Link} href='/solar-whatsapp-enquiry'>
                            Solar Whatsapp Enquiry
                         </LinkList>
                      </Grid>
                   </Grid>
                </Grid>
 
                <Grid item xs={12} sm={12} md={4} lg={3}>
                   {/* ============ Contact ============ */}
                   <FooterTitle>Contact</FooterTitle>
                   <LinkListWithIcon component={Link} href='/'>
                      <LocationOnIcon sx={{ color: '#ffd05b', mr: 1 }} />
                      <span>
                         Agarwal Bunglaw, Behind Atul Mangal Karyalaya, Rukmini
                         Nagar, Amravati, Maharashtra, India, 444606
                      </span>
                   </LinkListWithIcon>
                   <LinkListWithIcon
                      component='a'
                      href='tel:+918600694140'
                      sx={{ my: 1.5 }}
                   >
                      <PhoneEnabledIcon
                         sx={{
                            color: '#ffd05b',
                            mr: 1,
                            transform: 'rotate(90deg)',
                         }}
                      />
                      <span>+91-8600694140</span>
                   </LinkListWithIcon>
                   <LinkListWithIcon
                      component='a'
                      href='mailto:sumit@solruf.com'
                   >
                      <EmailIcon sx={{ color: '#ffd05b', mr: 1 }} />
                      <span>sumit@solruf.com</span>
                   </LinkListWithIcon>
                   <SocialIcons
                      sx={{
                         mt: matches ? '1.5rem' : '0.5rem',
                         display: matches ? 'flex' : 'block',
                         justifyContent: 'center',
                         alignItems: 'center',
                      }}
                   >
                      <Box
                         sx={{
                            mt: matches ? '1.5rem' : '0.5rem',
                            '& a': {
                               color: 'primary.main',
                               marginRight: '1rem',
                            },
                         }}
                      >
                         <a
                            href='https://www.facebook.com/SolrufIndia'
                            target='_blank'
                            rel='noreferrer'
                         >
                            <FacebookIcon
                               sx={{
                                  fontSize: '1.7rem',
                                  '@media (max-width: 600px)': {
                                     fontSize: '1.4rem',
                                  },
                               }}
                            />
                         </a>
                         <a
                            href='https://www.linkedin.com/company/solruf/'
                            target='_blank'
                            rel='noreferrer'
                         >
                            <LinkedInIcon
                               sx={{
                                  fontSize: '1.7rem',
                                  '@media (max-width: 600px)': {
                                     fontSize: '1.4rem',
                                  },
                               }}
                            />
                         </a>
                         <a
                            href='https://www.instagram.com/solrufco/'
                            target='_blank'
                            rel='noreferrer'
                         >
                            <InstagramIcon
                               sx={{
                                  fontSize: '1.7rem',
                                  '@media (max-width: 600px)': {
                                     fontSize: '1.4rem',
                                  },
                               }}
                            />
                         </a>
                         <a
                            href='https://www.youtube.com/channel/UCwQlCuStfqD7eP_rxAsYs6w'
                            target='_blank'
                            rel='noreferrer'
                         >
                            <YouTubeIcon
                               sx={{
                                  fontSize: '1.7rem',
                                  '@media (max-width: 600px)': {
                                     fontSize: '1.4rem',
                                  },
                               }}
                            />
                         </a>
                      </Box>
                      {matches && (
                         <Box>
                            <a
                               href='https://www.fieo.org/certificateview.php?memberfieo2009token=OvC4etKfCP_116295'
                               target='_blank'
                               rel='noreferrer'
                            >
                               <img
                                  src='https://solruf.s3.ap-south-1.amazonaws.com/fieo_logo.svg'
                                  alt=''
                                  style={{
                                     // maxWidth: "150px",
                                     width: '150px',
                                     height: '80px',
                                  }}
                               />
                            </a>
                         </Box>
                      )}
                   </SocialIcons>
                </Grid>
             </Grid>
          </Container>
 
          <BottomFooter>
             <Typography
                sx={{
                   '@media (max-width: 1200px)': {
                      fontSize: '0.9rem',
                   },
                   '@media (max-width: 600px)': {
                      fontSize: '0.7rem',
                   },
                }}
             >
                <strong>&copy;SOLRUF INDIA PRIVATE LIMITED</strong> All Right
                Reserved
             </Typography>
          </BottomFooter>
       </FooterWrapper>
    );
 };
 
 export default Footer;
 