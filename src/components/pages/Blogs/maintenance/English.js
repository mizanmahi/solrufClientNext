import CustomAccordionForBlogs from '@/components/Accordions/CustomAccordionForBlogs/CustomAccordionForBlogs';
import BlogAccordionContent from '@/components/BlogAccordionContent/BlogAccordionContent';
import BlogsContactSection from '@/components/BlogsContactSection/BlogsContactSection';
import GoToButton from '@/components/Buttons/PrimaryButton/GoToButton/GoToButton';
import FancyText from '@/components/FancyText/FancyText';
import { Box, Typography } from '@mui/material';
import React from 'react';
// import { FormFeaturesWrapper } from '../../home/home.style';
// import OfferForm from '../../OfferForm/OfferForm';
// import Features from '../../../components/Features/Features';


const English = () => {
   return (
      <div>
         <Typography sx={{ my: 10 }}>
            Once your solar installation is up and running, it&apos;s important to
            prioritize proper operation and maintenance to ensure its long-term
            efficiency and performance. Regular maintenance and monitoring can
            help maximize energy production, extend the lifespan of your solar
            panels, and optimize the return on your investment. In this blog, we
            will explore the key aspects of solar operation and maintenance to
            help you maintain a reliable and productive solar energy system.
         </Typography>

         <Box
            sx={{
               '& img': {
                  maxWidth: '100%',
                  width: '800px',
                  display: 'block',
                  mx: 'auto',
                  mb: 8,
               },
            }}
         >
            <img
               src='https://i.ibb.co/47bSSy6/Whats-App-Image-2023-06-21-at-02-23-08.jpg'
               alt='design'
            />
         </Box>

         <Box sx={{ mb: 5 }}>
            <FancyText>
               SOLRUF PROVIDES Site Visit and Operation & Maintenance services
               with Partner Technicians
            </FancyText>
         </Box>

         <GoToButton url='https://www.solruf.com/solar-enquiry-form'>
            CREATE A SOLAR Operation & Maintenance ENQUIRY WITH US
         </GoToButton>
         <br />
         <br />

         <CustomAccordionForBlogs
            title='Monitoring and Performance Analysis:'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                     Monitoring systems
                  </Typography>
                  <Typography>
                     Many solar installations come equipped with monitoring
                     systems that allow you to track energy production, system
                     performance, and identify any potential issues or under
                     performance.
                  </Typography>

                  <Typography
                     variant='subtitle1'
                     sx={{ fontWeight: 'bold', mt: 2 }}
                  >
                     Regular performance analysis
                  </Typography>
                  <Typography>
                     Periodically review and analyze the data from your
                     monitoring system to ensure your solar panels are
                     generating the expected amount of energy. Any significant
                     deviations should be investigated promptly.
                  </Typography>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         <CustomAccordionForBlogs
            title='Cleaning and Inspection:'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box sx={{ pl: 2 }}>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                     Regular cleaning
                  </Typography>
                  <Typography>
                     Depending on your location and environmental factors, solar
                     panels may accumulate dust, debris, or bird droppings over
                     time, reducing their efficiency. Clean the panels
                     periodically
                  </Typography>

                  <Typography
                     variant='subtitle1'
                     sx={{ fontWeight: 'bold', mt: 2 }}
                  >
                     Visual inspection
                  </Typography>
                  <Typography>
                     Conduct visual inspections to check for any signs of
                     physical damage, loose connections, or potential shading
                     issues caused by nearby trees or structures. Address these
                     issues promptly to prevent any long-term impact on energy
                     production.
                  </Typography>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         {/* <FormFeaturesWrapper>
            <OfferForm />
            <Features />
         </FormFeaturesWrapper> */}

         <CustomAccordionForBlogs
            title=' Electrical Components and Wiring:'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box sx={{ pl: 2 }}>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                     Inverter maintenance:
                  </Typography>
                  <Typography>
                     Inverters are critical components that convert DC energy
                     produced by the solar panels into usable AC energy. Follow
                     manufacturer guidelines for maintenance and consider
                     regular inspections to ensure they are functioning
                     correctly.
                  </Typography>

                  <Typography
                     variant='subtitle1'
                     sx={{ fontWeight: 'bold', mt: 2 }}
                  >
                     Wiring and connections:
                  </Typography>
                  <Typography>
                     Regularly check the wiring and connections for signs of
                     wear, corrosion, or loose connections. Ensure all
                     electrical components are properly secured and protected
                     from the elements.
                  </Typography>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         <CustomAccordionForBlogs
            title='Safety Measures:'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography>
                     <b>Turn off during maintenance:</b> Prior to conducting any
                     maintenance or cleaning activities, remember to turn off
                     the solar system to avoid electrical hazards.
                  </Typography>
                  <Typography>
                     <b>Professional assistance:</b> For complex maintenance or
                     repair tasks, it&apos;s advisable to seek the help of a
                     qualified solar professional to ensure safety and prevent
                     damage to the system.
                  </Typography>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         <CustomAccordionForBlogs
            title='Record-Keeping and Documentation:'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography>
                     <b>Maintenance logs:</b> Maintain a record of all
                     maintenance activities, including dates, tasks performed,
                     and any issues or repairs. This documentation will be
                     valuable for future reference and warranty claims.
                  </Typography>
                  <Typography>
                     <b>Warranty management:</b> Keep track of the warranty
                     information for your solar panels and associated
                     components. Understand the warranty terms and conditions to
                     ensure compliance and facilitate any necessary repairs or
                     replacements.
                  </Typography>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         <CustomAccordionForBlogs
            title='Stay Informed and Seek Professional Assistance:'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography>
                     Stay updated: Stay informed about advancements in solar
                     technology, system updates, and any relevant industry
                     changes that may impact the operation and maintenance of
                     your solar installation.
                  </Typography>
                  <Typography>
                     Professional assistance: If you encounter any complex
                     issues or concerns regarding your solar system&apos;s
                     performance, don&apos;t hesitate to seek professional assistance
                     from a qualified solar installer or technician.
                  </Typography>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         <Box
            sx={{
               '& img': {
                  maxWidth: '100%',
                  width: '500px',
                  display: 'block',
                  mx: 'auto',
                  my: 6,
                  
               },
            }}
         >
            <img
               src=' https://i.ibb.co/fF9KKnr/Whats-App-Image-2023-06-21-at-02-22-20.jpg'
               alt='design'
            />
         </Box>
         <Typography
            sx={{
               textAlign: 'center',
               my: 5,
               bgcolor: '#f3f3f3',
               p: 2,
               borderRadius: 2,
            }}
            variant='body1'
         >
            Proper operation and maintenance of your solar installation are
            essential for maximizing energy production, extending the lifespan
            of your system, and optimizing the return on your investment.
            Regular monitoring, cleaning, inspection, and addressing any
            maintenance needs promptly will ensure your solar panels continue to
            generate clean and sustainable energy for years to come. By adopting
            these best practices and staying proactive, you can enjoy the
            benefits of solar power while contributing to a greener and more
            sustainable future.
         </Typography>

         <BlogsContactSection />
      </div>
   );
};

export default English;
