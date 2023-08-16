import BlogsTopIntroSection from '@/components/pages/Blogs/BlogsTopIntroSection';
import {
   CardContent,
   CardMedia,
   Container,
   Grid,
   styled,
   Typography,
   Button,
} from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';
//  import { Helmet } from 'react-helmet';
//  import { useNavigate } from 'react-router';
//  import BlogIntroSection from '../../../components/BlogIntroSection/BlogIntroSection';
//  import PageTitle from '../../../components/PageTitle/PageTitle';
//  import Button from '../../../components/Button/Button';

const Wrapper = styled(Box)(({ theme }) => ({
   paddingBottom: '2rem',
   background: '#F3F3F3',
}));

const BlogCards = styled(Box)(({ theme }) => ({
   //    boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
   borderRadius: '5px',
   margin: '3rem 0',
   position: 'relative',
}));

const BlogCard = styled(Box)(({ theme }) => ({
   boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
   borderRadius: '10px',
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: 'column',
   [theme.breakpoints.down('sm')]: {
      borderRadius: '0px',
   },
}));

const SolarComponents = () => {
   // const navigate = useNavigate();

   return (
      <Wrapper>
         <Head>
            <meta
               name='title'
               content='Components used for solar installation'
            />
            <meta
               property='og:title'
               content='Components used for solar installation'
            />
            <meta
               name='description'
               content='There are various components to solar installation like solar design, solar batteries, solar panels and many more. We have mentioned all the components, go through it to get in-depth knowledge about solar panels.
                '
            />

            <title>Blog - Components used for solar installation</title>
         </Head>
         <BlogsTopIntroSection
            sx={{ mb: 14 }}
            title='COMPONENTS USED FOR INSTALLATION'
            backgroundImageUrl='https://i.ibb.co/3vzG2th/pexels-los-muertos-crew-8853468-1.png'
         />
         <Container maxWidth='lg' sx={{ padding: { sm: '20px', xs: 0 } }}>
            <BlogCards>
               <Grid container rowSpacing={3}>
                  <Grid
                     item
                     xs={12}
                     md={6}
                     sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                     <BlogCard sx={{ maxWidth: 440 }} elevation='0'>
                        <Box>
                           <CardMedia
                              sx={{ borderRadius: '5px 5px 0 0' }}
                              image='https://i.ibb.co/xMVKF84/Rectangle-155-5.png'
                              component='img'
                              height='350'
                              alt='green iguana'
                           />

                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant='h6'
                                 component='div'
                                 sx={{ fontWeight: 'bold' }}
                              >
                                 SOLAR DESIGN
                              </Typography>
                              <Typography
                                 variant='body2'
                                 color='text.secondary'
                              >
                                 Solar design is the representation of the
                                 photovoltaic system characteristics such as
                                 civil and electrical rendition including.
                              </Typography>
                           </CardContent>
                        </Box>
                        <Box sx={{ p: 2 }}>
                           <Link href='/blogs/solarDesign'>
                              <Button>Read More</Button>
                           </Link>
                        </Box>
                     </BlogCard>
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     md={6}
                     sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                     <BlogCard sx={{ maxWidth: 440 }} elevation='0'>
                        <Box>
                           <CardMedia
                              sx={{ borderRadius: '5px 5px 0 0' }}
                              component='img'
                              height='350'
                              image='https://i.ibb.co/ns0bqSH/Rectangle-155-6.png'
                              alt='green iguana'
                           />

                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant='h6'
                                 component='div'
                                 sx={{ fontWeight: 'bold' }}
                              >
                                 SOLAR PANELS
                              </Typography>
                              <Typography
                                 variant='body2'
                                 color='text.secondary'
                              >
                                 Solar panels collect clean renewable energy in
                                 the form of sunlight and convert that light
                                 into electricity which..
                              </Typography>
                           </CardContent>
                        </Box>
                        <Box sx={{ p: 2 }}>
                           <Link href='/blogs/solarSteps'>
                              <Button>Read More</Button>
                           </Link>
                        </Box>
                     </BlogCard>
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     md={6}
                     sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                     <BlogCard sx={{ maxWidth: 440 }} elevation='0'>
                        <Box>
                           <CardMedia
                              sx={{ borderRadius: '5px 5px 0 0' }}
                              component='img'
                              height='350'
                              image='https://i.ibb.co/8XkCns1/Rectangle-155-7.png'
                              alt='green iguana'
                           />

                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant='h6'
                                 component='div'
                                 sx={{ fontWeight: 'bold' }}
                              >
                                 SOLAR BATTERIES
                              </Typography>
                              <Typography
                                 variant='body2'
                                 color='text.secondary'
                              >
                                 Solar batteries are an additional component
                                 that allows for the storage of solar
                                 photovoltaic energy, so we can use it..
                              </Typography>
                           </CardContent>
                        </Box>
                        <Box sx={{ p: 2 }}>
                           <Link href='/blogs/solarInstallationProcess'>
                              <Button>Read More</Button>
                           </Link>
                        </Box>
                     </BlogCard>
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     md={6}
                     sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                     <BlogCard sx={{ maxWidth: 440 }} elevation='0'>
                        <Box>
                           <CardMedia
                              sx={{ borderRadius: '5px 5px 0 0' }}
                              component='img'
                              height='350'
                              image='https://i.ibb.co/8P1J6VP/Rectangle-155-8.png'
                              alt='green iguana'
                           />

                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant='h6'
                                 component='div'
                                 sx={{ fontWeight: 'bold' }}
                              >
                                 SOLAR INVERTERS
                              </Typography>
                              <Typography
                                 variant='body2'
                                 color='text.secondary'
                              >
                                 Solar inverters are used to convert the direct
                                 current (DC) electricity generated by solar
                                 photovoltaic modules into..
                              </Typography>
                           </CardContent>
                        </Box>
                        <Box sx={{ p: 2 }}>
                           <Link href='/blogs/solarComponents'>
                              <Button>Read More</Button>
                           </Link>
                        </Box>
                     </BlogCard>
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     md={6}
                     sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                     <BlogCard sx={{ maxWidth: 440 }} elevation='0'>
                        <Box>
                           <CardMedia
                              sx={{ borderRadius: '5px 5px 0 0' }}
                              component='img'
                              height='350'
                              image='https://i.ibb.co/vJDkf0T/Rectangle-155-9.png'
                              alt='green iguana'
                           />

                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant='h6'
                                 component='div'
                                 sx={{ fontWeight: 'bold' }}
                              >
                                 MODULE MOUNTING STRUCTURES
                              </Typography>
                              <Typography
                                 variant='body2'
                                 color='text.secondary'
                              >
                                 PV arrays must be mounted on a stable, durable
                                 structure that can support the array and
                                 withstand wind, rain, hail, and..
                              </Typography>
                           </CardContent>
                        </Box>
                        <Box sx={{ p: 2 }}>
                           <Link href='/blogs/maintenance'>
                              <Button>Read More</Button>
                           </Link>
                        </Box>
                     </BlogCard>
                  </Grid>
                  <Grid
                     item
                     xs={12}
                     md={6}
                     sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                     <BlogCard sx={{ maxWidth: 440 }} elevation='0'>
                        <Box>
                           <CardMedia
                              sx={{ borderRadius: '5px 5px 0 0' }}
                              component='img'
                              height='350'
                              image='https://i.ibb.co/6mwG0ZW/Rectangle-155-10.png'
                              alt='green iguana'
                           />

                           <CardContent>
                              <Typography
                                 gutterBottom
                                 variant='h6'
                                 component='div'
                                 sx={{ fontWeight: 'bold' }}
                              >
                                 BALANCE OF SYSTEMS
                              </Typography>
                              <Typography
                                 variant='body2'
                                 color='text.secondary'
                              >
                                 The balance of system (BOS) refers to the
                                 components and equipment that move DC energy
                                 produced by solar..
                              </Typography>
                           </CardContent>
                        </Box>
                        <Box sx={{ p: 2 }}>
                           <Link href='/blogs/maintenance'>
                              <Button>Read More</Button>
                           </Link>
                        </Box>
                     </BlogCard>
                  </Grid>
               </Grid>
            </BlogCards>
         </Container>
      </Wrapper>
   );
};

export default SolarComponents;
