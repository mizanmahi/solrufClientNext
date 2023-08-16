import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import BlogsContactSectionHindi from '@/components/BlogsContactSection/BlogsContactSectionHindi';
import BlogAccordionContent from '@/components/BlogAccordionContent/BlogAccordionContent';
import CustomAccordionForBlogs from '@/components/Accordions/CustomAccordionForBlogs/CustomAccordionForBlogs';

const Hindi = () => {
   return (
      <>
         <Typography
            sx={{ mb: 2, padding: { xs: '20px', sm: 0, mb: 2 } }}
            variant='body1'
            component='h2'
         >
            सोलर लाइट किट ने हमारे द्वारा रिक्त स्थान को रोशन करने के तरीके में
            क्रांति ला दी है, विशेष रूप से उन क्षेत्रों में जहां बिजली की सीमित
            पहुंच है या बाहरी गतिविधियों के दौरान। ये किट प्रकाश समाधान प्रदान
            करने के लिए सूर्य की शक्ति का उपयोग करते हैं जो न केवल पर्यावरण के
            अनुकूल हैं बल्कि लागत प्रभावी और बहुमुखी भी हैं। इस ब्लॉग में, हम
            सोलर लाइट किट के कई लाभों का पता लगाएंगे और यह भी जानेंगे कि कैसे वे
            समुदायों, घरों और बाहरी उत्साही लोगों पर सकारात्मक प्रभाव डाल रहे
            हैं।
         </Typography>

         <CustomAccordionForBlogs
            title='ऊर्जा दक्षता और लागत बचत'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                     नवीकरणीय ऊर्जा स्रोत:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सौर प्रकाश किट अपनी शक्ति सूर्य से प्राप्त करते हैं,
                           एक स्वच्छ और नवीकरणीय ऊर्जा स्रोत, पारंपरिक बिजली
                           ग्रिड पर निर्भरता को कम करते हैं और कार्बन फुटप्रिंट
                           को कम करते हैं।
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     लागत प्रभावी प्रकाश व्यवस्था:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           एक बार सोलर लाइट किट खरीदने के बाद, परिचालन लागत
                           न्यूनतम हो जाती है क्योंकि सूर्य का प्रकाश मुफ्त होता
                           है। बिजली के बिलों से जुड़ा कोई आवर्ती खर्च नहीं है,
                           जो लंबे समय में सौर रोशनी को एक किफायती विकल्प बनाता
                           है।
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         <CustomAccordionForBlogs
            title='बहुमुखी प्रतिभा और उपयोग में आसानी'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     पोर्टेबल और लाइटवेट:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सोलर लाइट किट को पोर्टेबल होने के लिए डिज़ाइन किया
                           गया है, जो विभिन्न सेटिंग्स में आसान परिवहन और
                           स्थापना की अनुमति देता है, जैसे कैंपिंग ट्रिप, बाहरी
                           कार्यक्रम या आपातकालीन स्थिति।
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     लचीले प्लेसमेंट विकल्प:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           बिजली के तारों की आवश्यकता के बिना, सोलर लाइट किट को
                           वस्तुतः कहीं भी स्थापित किया जा सकता है, चाहे वह
                           दूरस्थ स्थानों, बगीचे के रास्तों या शेड में हो। यह
                           लचीलापन प्रकाश की पहुंच और सुविधा को बढ़ाता है।
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         <CustomAccordionForBlogs
            title='पर्यावरणीय स्थिरता'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     कम कार्बन उत्सर्जन:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सौर प्रकाश किट जीवाश्म ईंधन को जलाए बिना काम करते
                           हैं, इस प्रकार ग्रीनहाउस गैस उत्सर्जन को कम करते हैं
                           और जलवायु परिवर्तन से निपटने में मदद करते हैं।
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     न्यूनतम पर्यावरणीय प्रभाव:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सौर रोशनी ध्वनि प्रदूषण उत्पन्न नहीं करती है या
                           प्रकाश प्रदूषण में योगदान नहीं देती है, जिससे वे
                           पर्यावरण के अनुकूल बनते हैं और प्राकृतिक पारिस्थितिक
                           तंत्र को संरक्षित करते हैं।
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         <CustomAccordionForBlogs
            title='बढ़ी हुई सुरक्षा और सुरक्षा'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     बिजली आउटेज के दौरान रोशनी:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सोलर लाइट किट बिजली आउटेज के दौरान या अविश्वसनीय
                           बिजली आपूर्ति वाले क्षेत्रों में घरों और समुदायों के
                           लिए सुरक्षा और सुरक्षा सुनिश्चित करने के लिए
                           महत्वपूर्ण प्रकाश व्यवस्था प्रदान कर सकते हैं।
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     अपराध की रोकथाम:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           अच्छी तरह से प्रकाशित परिवेश संभावित घुसपैठियों को
                           रोकता है और विशेष रूप से अंधेरे क्षेत्रों में या रात
                           की गतिविधियों के दौरान सुरक्षा बढ़ाता है।
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         <CustomAccordionForBlogs
            title='ऑफ-ग्रिड समुदायों को सशक्त बनाना'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     दूरदराज के क्षेत्रों में प्रकाश व्यवस्था तक पहुंच:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सोलर लाइट किट उन समुदायों के लिए गेम-चेंजर हैं, जिनकी
                           बिजली ग्रिड तक पहुंच नहीं है। वे एक विश्वसनीय और
                           स्थायी प्रकाश समाधान प्रदान करते हैं, शैक्षिक
                           गतिविधियों को सक्षम करते हैं, काम के घंटे बढ़ाते हैं,
                           और जीवन की गुणवत्ता में सुधार करते हैं।
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     स्वास्थ्य और शिक्षा के लाभ:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सोलर लाइटिंग से घरों में पढ़ाई के घंटे बढ़ जाते हैं
                           और शैक्षिक संसाधनों तक पहुंच बढ़ जाती है। इसके
                           अतिरिक्त, यह मिट्टी के तेल के लैंप जैसे हानिकारक और
                           अकुशल पारंपरिक प्रकाश स्रोतों पर निर्भरता को कम करता
                           है, इनडोर वायु गुणवत्ता में सुधार करता है और
                           स्वास्थ्य जोखिमों को कम करता है।
                        </ListItemText>
                     </ListItem>
                  </List>
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>
         <CustomAccordionForBlogs
            title='कम रखरखाव और दीर्घायु'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     न्यूनतम रखरखाव:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सौर प्रकाश किटों को न्यूनतम रखरखाव की आवश्यकता होती
                           है, मुख्य रूप से सूर्य के अधिकतम अवशोषण को सुनिश्चित
                           करने के लिए मुख्य रूप से सौर पैनलों की सामयिक सफाई
                           शामिल होती है।
                        </ListItemText>
                     </ListItem>
                  </List>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                     लंबे समय तक चलने वाला प्रदर्शन:
                  </Typography>
                  <List sx={{ pl: 2 }}>
                     <ListItem>
                        <ListItemText>
                           सोलर लाइट को विभिन्न मौसम की स्थिति का सामना करने के
                           लिए डिज़ाइन किया गया है, और उचित देखभाल के साथ, वे
                           विश्वसनीय प्रकाश समाधान प्रदान करते हुए वर्षों तक चल
                           सकते हैं।
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
            सोलर लाइट किट ऊर्जा दक्षता और लागत बचत से लेकर पर्यावरणीय स्थिरता और
            बेहतर सुरक्षा तक कई प्रकार के लाभ प्रदान करते हैं। वे समुदायों को
            सशक्त बनाते हैं, प्रकाश व्यवस्था तक पहुंच बढ़ाते हैं और एक स्वच्छ और
            उज्जवल भविष्य में योगदान करते हैं। चाहे बाहरी रोमांच, आपातकालीन
            तैयारी, या दूरस्थ क्षेत्रों को रोशन करने के लिए, सोलर लाइट किट एक
            बहुमुखी और विश्वसनीय समाधान के रूप में उभरे हैं। सौर प्रकाश व्यवस्था
            की शक्ति को अपनाएं और एक अधिक टिकाऊ और प्रबुद्ध दुनिया की ओर आंदोलन
            में शामिल हों।
         </Typography>

         <BlogsContactSectionHindi />
      </>
   );
};

export default Hindi;
