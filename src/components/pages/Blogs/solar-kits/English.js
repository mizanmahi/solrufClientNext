import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import CustomAccordionForBlogs from '@/components/Accordions/CustomAccordionForBlogs/CustomAccordionForBlogs';
import BlogAccordionContent from '@/components/BlogAccordionContent/BlogAccordionContent';
import BlogsContactSection from '@/components/BlogsContactSection/BlogsContactSection';
// import CustomAccordionForBlogs from '../../../components/CustomAccordionForBlogs/CustomAccordionForBlogs';
// import BlogAccordionContent from '../../../components/BlogAccordionContent/BlogAccordionContent';
// import HorizontalProdCard from './HorizontalProdCard';

const English = () => {
   return (
      <>
         <Typography
            sx={{ mb: 2, padding: { xs: '20px', sm: 0, mb: 2 } }}
            variant='body1'
            component='h2'
         >
            Solar light kits have revolutionized the way we illuminate spaces,
            particularly in areas with limited access to electricity or during
            outdoor activities. These kits harness the power of the sun to
            provide lighting solutions that are not only eco-friendly but also
            cost-effective and versatile. In this blog, we will explore the
            numerous benefits of solar light kits and how they are making a
            positive impact on communities, households, and outdoor enthusiasts.
         </Typography>

         {/* <Box
            sx={{
               '& img': {
                  maxWidth: '100%',
                  width: '700px',
                  display: 'block',
                  mx: 'auto',
                  my: 6,
               },
            }}
         >
            <img
               src=' https://i.ibb.co/Bg5qGGm/Whats-App-Image-2023-06-21-at-02-44-57.jpg'
               alt='design'
            />
         </Box> */}

         <CustomAccordionForBlogs
            title='Energy Efficiency and Cost Savings'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                     Renewable energy source:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar light kits derive their power from the sun, a
                           clean and renewable energy source, reducing the
                           reliance on traditional electricity grids and
                           minimizing carbon footprints.
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Cost-effective lighting:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Once the solar light kit is purchased, the
                           operational costs are minimal as sunlight is free.
                           There are no recurring expenses associated with
                           electricity bills, making solar lights a
                           cost-efficient option in the long run.
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         {/* <Box sx={{mb: 3}}>
            <HorizontalProdCard />
         </Box> */}
         <CustomAccordionForBlogs
            title='Versatility and Ease of Use'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Portable and lightweight:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar light kits are designed to be portable,
                           allowing for easy transportation and installation in
                           various settings, such as camping trips, outdoor
                           events, or emergency situations.
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Flexible placement options:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           With no need for electrical wiring, solar light kits
                           can be installed virtually anywhere, whether it &apos;s in
                           remote locations, garden paths, or sheds. This
                           flexibility enhances lighting accessibility and
                           convenience.
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         <CustomAccordionForBlogs
            title='Environmental Sustainability'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Reduced carbon emissions:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar light kits operate without burning fossil
                           fuels, thus reducing greenhouse gas emissions and
                           helping combat climate change.
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Minimal environmental impact:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar lights do not produce noise pollution or
                           contribute to light pollution, making them
                           environmentally friendly and preserving natural
                           ecosystems.
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         <CustomAccordionForBlogs
            title='Enhanced Safety and Security'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Illumination during power outages:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar light kits can provide crucial lighting during
                           power outages or in areas with unreliable electricity
                           supply, ensuring safety and security for households
                           and communities.
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Crime prevention:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Well-lit surroundings deter potential intruders and
                           enhance safety, particularly in dark areas or during
                           nighttime activities.
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         <CustomAccordionForBlogs
            title='Empowering Off-Grid Communities'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Access to lighting in remote areas:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar light kits are a game-changer for communities
                           that lack access to electricity grids. They provide a
                           reliable and sustainable lighting solution, enabling
                           educational activities, extended working hours, and
                           improved quality of life.
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Health and education benefits:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar lighting allows for extended study hours in
                           households and enhances access to educational
                           resources. Additionally, it reduces the reliance on
                           harmful and inefficient traditional lighting sources
                           like kerosene lamps, improving indoor air quality and
                           reducing health risks.
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         <CustomAccordionForBlogs
            title='Low Maintenance and Longevity'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Minimal upkeep:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar light kits require minimal maintenance,
                           primarily consisting of occasional cleaning of solar
                           panels to ensure maximum sunlight absorption.
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     Long-lasting performance:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           Solar lights are designed to withstand various
                           weather conditions, and with proper care, they can
                           last for years, providing reliable lighting
                           solutions.
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         <Typography
            sx={{
               textAlign: 'center',
               my: 5,
               bgcolor: '#ffffff',
               p: 2,
               borderRadius: 2,
            }}
            variant='body1'
         >
            Solar light kits offer a range of benefits, from energy efficiency
            and cost savings to environmental sustainability and improved
            safety. They empower communities, enhance accessibility to lighting,
            and contribute to a cleaner and brighter future. Whether for outdoor
            adventures, emergency preparedness, or lighting up remote areas,
            solar light kits have emerged as a versatile and reliable solution.
            Embrace the power of solar lighting and join the movement towards a
            more sustainable and illuminated world.
         </Typography>

         <BlogsContactSection />
      </>
   );
};

export default English;
