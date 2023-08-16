import { Box, Typography } from '@mui/material';
import React from 'react';

import FancyText from '@/components/FancyText/FancyText';
import GoToButton from '@/components/Buttons/PrimaryButton/GoToButton/GoToButton';
import BlogsContactSection from '@/components/BlogsContactSection/BlogsContactSection';
import BlogAccordionContent from '@/components/BlogAccordionContent/BlogAccordionContent';
import CustomAccordionForBlogs from '@/components/Accordions/CustomAccordionForBlogs/CustomAccordionForBlogs';


const English = () => {
   return (
      <>
         <Typography
            sx={{ mb: 2, padding: { xs: '20px', sm: 0, mb: 2 } }}
            variant='body1'
            component='h2'
         >
            The world is experiencing a significant shift towards renewable
            energy sources, and solar installations are at the forefront of this
            clean energy revolution. Solar power offers numerous benefits, from
            reducing carbon emissions and mitigating climate change to providing
            a sustainable and cost-effective energy solution. In this blog, we
            will explore the types of Solar Installations and walk you through
            the solar installation process, from initial planning to the final
            connection, so you can embark on your journey towards a greener and
            more sustainable future.
         </Typography>

         <Box sx={{ mb: 2 }}>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
               Advantages of Solar Installations
            </Typography>
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                     Renewable and sustainable energy:
                  </Typography>
                  <Typography>
                     The sun is an abundant source of energy, and solar
                     installations harness this energy through photovoltaic (PV)
                     or concentrated solar power (CSP) systems.
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                     Lower energy costs:
                  </Typography>
                  <Typography>
                     Solar power allows homeowners, businesses, and communities
                     to generate their own electricity, reducing dependence on
                     the grid and potentially lowering energy bills.
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                     Energy independence:
                  </Typography>
                  <Typography>
                     Solar installations offer greater energy independence,
                     providing a reliable and decentralized source of power that
                     is not subject to price fluctuations or supply disruptions.
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                     Long-term financial benefits:
                  </Typography>
                  <Typography>
                     Investing in solar panels can result in long-term financial
                     savings, as well as potential incentives such as tax
                     credits, rebates, and net metering programs.
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                     <FancyText>
                        SOLRUF PROVIDES FREE NATIONAL SOLAR SUBSIDY APPLICATION
                        WITH EMI SERVICES
                     </FancyText>
                  </Box>
                  {/* <BookVisit /> */}
               </Box>
            </BlogAccordionContent>
         </Box>

         <Box sx={{ mb: 2 }}>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
               Types of Solar Installations
            </Typography>
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                     Residential solar installations:
                  </Typography>
                  <Typography>
                     Homeowners can install rooftop solar panels to generate
                     electricity for personal use, with excess energy often
                     being fed back into the grid.
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                     Commercial and industrial installations:
                  </Typography>
                  <Typography>
                     Businesses and industries are increasingly adopting solar
                     power to reduce operating costs, enhance sustainability
                     efforts, and improve their corporate image.
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                     Utility-scale solar installations:
                  </Typography>
                  <Typography>
                     Large-scale solar farms or solar power plants contribute
                     significantly to the generation of renewable energy,
                     providing electricity to communities and reducing reliance
                     on fossil fuel-based power plants.
                  </Typography>
               </Box>
            </BlogAccordionContent>
         </Box>

         <Box sx={{ mb: 2 }}>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
               Solar Installation process
            </Typography>

            <CustomAccordionForBlogs
               title='Initial Assessment and Planning:'
               sx={{ mb: 2 }}
               defaultExpanded={true}
            >
               <BlogAccordionContent>
                  <Box sx={{ pl: 2 }}>
                     <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold' }}
                     >
                        Site evaluation:
                     </Typography>
                     <Typography>
                        A solar installer will assess your property&apos;s
                        suitability for solar panels, considering factors like
                        roof orientation, shading, and structural integrity.
                     </Typography>

                     <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold', mt: 2 }}
                     >
                        Energy analysis:
                     </Typography>
                     <Typography>
                        The installer will analyze your energy consumption
                        patterns to determine the optimal system size and
                        estimate potential energy production.
                     </Typography>

                     <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold', mt: 2 }}
                     >
                        Financial considerations:
                     </Typography>
                     <Typography>
                        Exploring financing options, incentives, and available
                        rebates will help determine the feasibility and
                        financial benefits of your solar installation.
                     </Typography>
                  </Box>
               </BlogAccordionContent>
            </CustomAccordionForBlogs>

            <CustomAccordionForBlogs
               title=' System Design and Permitting:'
               sx={{ mb: 2 }}
               defaultExpanded={true}
            >
               <BlogAccordionContent>
                  <Box sx={{ pl: 2 }}>
                     <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold' }}
                     >
                        System design:
                     </Typography>
                     <Typography>
                        Based on the assessment, the installer will design a
                        solar system that maximizes energy production and suits
                        your specific needs.
                     </Typography>
                  </Box>
               </BlogAccordionContent>
            </CustomAccordionForBlogs>

            <Box>
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: 2
                  }}
               >
                  <Box sx={{ mt: 5 }}>
                     <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Check out the Sample 3D Solar Design for a 3.2 Kw system
                        here:
                     </Typography>

                     <Box sx={{ ml: 2, my: 1 }}>
                        <GoToButton url='https://drive.google.com/file/d/1B_-xRmQ94s2g1jz3JvXWvs4ZOgYx8yvC/view?usp=sharing'>
                           3D Solar Design & Power Generation
                        </GoToButton>
                     </Box>

                     <Typography variant='body1'>
                        Solruf provides Solar Site visit and generates a 3D
                        Layout with Power generation report for designing your
                        Solar Installation system.
                     </Typography>
                  </Box>
                  <Box
                     sx={{
                        '& img': {
                           maxWidth: '100%',
                           width: '700px'
                        },
                     }}
                  >
                     <img
                        src='https://i.ibb.co/zFzfxdk/Whats-App-Image-2023-06-21-at-01-49-44.jpg'
                        alt='design'
                     />
                  </Box>
               </Box>
{/* 
               <FormFeaturesWrapper>
                  <OfferForm />
                  <Features />
               </FormFeaturesWrapper> */}

               <CustomAccordionForBlogs
                  title='Permitting and paperwork:'
                  sx={{ mb: 2 }}
                  defaultExpanded={true}
               >
                  <BlogAccordionContent>
                     <Typography>
                        The installer will handle the necessary permits,
                        paperwork, and any utility interconnection agreements
                        required for the installation.
                     </Typography>
                  </BlogAccordionContent>
               </CustomAccordionForBlogs>

               <CustomAccordionForBlogs
                  title='Equipment Procurement:'
                  sx={{ mb: 2 }}
                  defaultExpanded={true}
               >
                  <BlogAccordionContent>
                     <Box sx={{ pl: 2 }}>
                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold' }}
                        >
                           Solar panel selection:
                        </Typography>
                        <Typography>
                           The installer will help you choose the most suitable
                           solar panels based on efficiency, durability, and
                           warranties.
                        </Typography>

                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                           Inverter selection:
                        </Typography>
                        <Typography>
                           Inverters convert the DC energy produced by solar
                           panels into usable AC energy. The installer will
                           assist in selecting the right type of inverter for
                           your system.
                        </Typography>
                     </Box>
                  </BlogAccordionContent>
               </CustomAccordionForBlogs>

               <CustomAccordionForBlogs
                  title=' Installation:'
                  sx={{ mb: 2 }}
                  defaultExpanded={true}
               >
                  <BlogAccordionContent>
                     <Box sx={{ pl: 2 }}>
                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold' }}
                        >
                           Roof preparation:
                        </Typography>
                        <Typography>
                           If needed, the installer will make any necessary
                           repairs or upgrades to ensure the roof is ready to
                           support the solar panels.
                        </Typography>

                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                           Mounting the panels:
                        </Typography>
                        <Typography>
                           Racking or mounting systems are installed on the
                           roof, securely anchoring the solar panels in the
                           optimal position for sunlight exposure.
                        </Typography>

                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                           Wiring and electrical work:
                        </Typography>
                        <Typography>
                           The solar panels are connected with wiring, and
                           electrical components, such as inverters and meters,
                           are installed to enable the flow of electricity.
                        </Typography>
                     </Box>
                  </BlogAccordionContent>
               </CustomAccordionForBlogs>
               <CustomAccordionForBlogs
                  title='Inspection and Interconnection:'
                  sx={{ mb: 2 }}
                  defaultExpanded={true}
               >
                  <BlogAccordionContent>
                     <Box sx={{ pl: 2 }}>
                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold' }}
                        >
                           Local inspection:
                        </Typography>
                        <Typography>
                           A representative from the local authority or utility
                           may inspect the solar installation to ensure
                           compliance with safety and code requirements.
                        </Typography>

                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                           Utility interconnection:
                        </Typography>
                        <Typography>
                           Once the system passes inspection, the utility
                           company will finalize the interconnection process,
                           allowing you to receive credit for excess energy
                           exported to the grid.
                        </Typography>
                     </Box>
                  </BlogAccordionContent>
               </CustomAccordionForBlogs>
            </Box>
         </Box>

         <BlogsContactSection />
      </>
   );
};

export default English;
