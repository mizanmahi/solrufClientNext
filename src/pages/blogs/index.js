import React from 'react';
import Head from 'next/head';
import {
   Box,
   Button,
   CardContent,
   CardMedia,
   Container,
   Grid,
   Typography,
   styled,
} from '@mui/material';
import RecentBlogList from '@/components/pages/Blogs/RecentBlogList';
import BlogsTopIntroSection from '@/components/pages/Blogs/BlogsTopIntroSection';

const BlogCards = styled(Box)(({ theme }) => ({
   borderRadius: '5px',
   margin: '3rem 0',
   position: 'relative',
}));

const BlogCard = styled(Box)(({ theme }) => ({
   boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
   borderRadius: '10px',
   display: 'flex',
   maxWidth: 440,
   justifyContent: 'space-between',
   flexDirection: 'column',
   [theme.breakpoints.down('sm')]: {
      borderRadius: '0px',
      maxWidth: '100%',
      width: '100%',
   },
}));

const Blogs = () => {
   console.log('first')
   return (
      <>
         <Head>
            <title>My Blog Post</title>
            <meta name='description' content='This is a blog post about...' />
            <meta name='keywords' content='blog, post, solruf' />
            <meta name='author' content='solruf' />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1.0'
            />
            <link
               rel='canonical'
               href='https://example.com/blog/my-blog-post'
            />
         </Head>
         <BlogsTopIntroSection title='Solar Installation' />
         <Container>
            <Grid
               container
               spacing={2}
               sx={{ flexDirection: { sm: 'row', xs: 'column-reverse' } }}
            >
               <Grid item xs={12} md={3}>
                  <RecentBlogList />
               </Grid>

               <Grid item xs={12} md={9}>
                  <Typography
                     sx={{ padding: { sm: 'auto', xs: '20px', md: 0 } }}
                  >
                     In an hour and a half, the amount of sunshine that touches
                     the earth&apos;s surface is enough to power the entire
                     world&apos;s energy usage for a year. Solar power is the
                     conversion of solar energy into electrical energy. This
                     energy can be harnessed using solar technologies for a
                     multitude of purposes; photovoltaic, solar heating and
                     cooling, and concentrating solar power. Photovoltaic
                     employs an electronic method to create electricity directly
                     from sunshine, which may be used to power anything. <br />
                     <br />
                     Let&apos;s look at the potential of photovoltaic (PV)
                     technology for generating electricity from sunlight.
                     Individual PV cells are composed of a variety of
                     semiconductor materials and are typically thinner than four
                     human hairs. Cells are sandwiched between protective
                     materials made of a combination of glass and/or plastics to
                     endure the elements for many years. <br /> <br />
                     To boost the power output of PV cells, they are connected
                     together in chains to form larger units known as modules or
                     panels. PV modules and arrays are just one part of a PV
                     system. Systems also include mounting structures that point
                     panels toward the sun, along with the components that take
                     the direct-current (DC) electricity produced by modules and
                     convert it to the alternating-current (AC) electricity used
                     to power all of the appliances in your home.
                  </Typography>
                  <BlogCards>
                     <Grid container rowSpacing={3}>
                        <Grid
                           item
                           xs={12}
                           md={6}
                           sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                           <BlogCard elevation='0'>
                              <Box>
                                 <CardMedia
                                    sx={{ borderRadius: '5px 5px 0 0' }}
                                    image='https://i.ibb.co/4m13WN5/Rectangle-155-1.png'
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
                                       Types of PV Systems
                                    </Typography>
                                    <Typography
                                       variant='body2'
                                       color='text.secondary'
                                    >
                                       The various PV systems outlined below
                                       could be used in a variety of
                                       circumstances.
                                    </Typography>
                                 </CardContent>
                              </Box>
                              <Box sx={{ p: 2 }}>
                                 <Button
                                    onClick={() =>
                                       navigate('/blogs/typesOfPvSystems')
                                    }
                                 >
                                    Read More
                                 </Button>
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
                                    image='https://i.ibb.co/d5w1cCm/Rectangle-155.png'
                                    alt='green iguana'
                                 />

                                 <CardContent>
                                    <Typography
                                       gutterBottom
                                       variant='h6'
                                       component='div'
                                       sx={{ fontWeight: 'bold' }}
                                    >
                                       What Steps do I Need to Take Before Solar
                                       power system Installation?
                                    </Typography>
                                    <Typography
                                       variant='body2'
                                       color='text.secondary'
                                    >
                                       The various PV systems outlined below
                                       could be used in a variety of
                                       circumstances.
                                    </Typography>
                                 </CardContent>
                              </Box>
                              <Box sx={{ p: 2 }}>
                                 <Button
                                    onClick={() =>
                                       navigate('/blogs/solarSteps')
                                    }
                                 >
                                    Read More
                                 </Button>
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
                                    image='https://i.ibb.co/ZhwXXWp/Rectangle-155-2.png'
                                    alt='green iguana'
                                 />

                                 <CardContent>
                                    <Typography
                                       gutterBottom
                                       variant='h6'
                                       component='div'
                                       sx={{ fontWeight: 'bold' }}
                                    >
                                       Solar Installation Process
                                    </Typography>
                                    <Typography
                                       variant='body2'
                                       color='text.secondary'
                                    >
                                       The first step is to fix the mounts that
                                       will support the Solar Panels. Depending
                                       on the application.
                                    </Typography>
                                 </CardContent>
                              </Box>
                              <Box sx={{ p: 2 }}>
                                 <Button
                                    onClick={() =>
                                       navigate(
                                          '/blogs/solarInstallationProcess'
                                       )
                                    }
                                 >
                                    Read More
                                 </Button>
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
                                    image='https://i.ibb.co/x2b4q9M/Rectangle-155-3.png'
                                    alt='green iguana'
                                 />

                                 <CardContent>
                                    <Typography
                                       gutterBottom
                                       variant='h6'
                                       component='div'
                                       sx={{ fontWeight: 'bold' }}
                                    >
                                       Components used in Solar Installation
                                    </Typography>
                                    <Typography
                                       variant='body2'
                                       color='text.secondary'
                                    >
                                       The first step is to fix the mounts that
                                       will support the Solar Panels. Depending
                                       on the application.
                                    </Typography>
                                 </CardContent>
                              </Box>
                              <Box sx={{ p: 2 }}>
                                 <Button
                                    onClick={() =>
                                       navigate('/blogs/solarComponents')
                                    }
                                 >
                                    Read More
                                 </Button>
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
                                    image='https://i.ibb.co/cJDTyxS/Rectangle-155-4.png'
                                    alt='green iguana'
                                 />

                                 <CardContent>
                                    <Typography
                                       gutterBottom
                                       variant='h6'
                                       component='div'
                                       sx={{ fontWeight: 'bold' }}
                                    >
                                       Solar Panel Maintenance
                                    </Typography>
                                    <Typography
                                       variant='body2'
                                       color='text.secondary'
                                    >
                                       Solar panels require extremely little
                                       maintenance because they have no moving
                                       parts. However,
                                    </Typography>
                                 </CardContent>
                              </Box>
                              <Box sx={{ p: 2 }}>
                                 <Button
                                    onClick={() =>
                                       navigate('/blogs/maintenance')
                                    }
                                 >
                                    Read More
                                 </Button>
                              </Box>
                           </BlogCard>
                        </Grid>
                        <Grid
                           item
                           xs={12}
                           md={6}
                           sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                           <BlogCard elevation='0'>
                              <Box>
                                 <CardMedia
                                    sx={{ borderRadius: '5px 5px 0 0' }}
                                    image='https://solruf.s3.ap-south-1.amazonaws.com/kwatt-bg+(1)+(1)+(1)+(1)+(1)+(1)+(1).png'
                                    component='img'
                                    height='350'
                                    alt='kwatt courses'
                                 />

                                 <CardContent>
                                    <Typography
                                       gutterBottom
                                       variant='h6'
                                       component='div'
                                       sx={{ fontWeight: 'bold' }}
                                    >
                                       kWatt Solar Courses
                                    </Typography>
                                    <Typography
                                       variant='body2'
                                       color='text.secondary'
                                    >
                                       kWatt Solutions Pvt Ltd is active in the
                                       renewable energy space, focusing on
                                       energy optimization and technology
                                       customization.
                                    </Typography>
                                 </CardContent>
                              </Box>
                              <Box sx={{ p: 2 }}>
                                 <Button
                                    onClick={() =>
                                       navigate('/blogs/kWatt-solar-courses')
                                    }
                                 >
                                    Read More
                                 </Button>
                              </Box>
                           </BlogCard>
                        </Grid>
                     </Grid>
                  </BlogCards>
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default Blogs;
