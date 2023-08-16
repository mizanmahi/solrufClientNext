import { Box, Typography } from '@mui/material';
import React from 'react';
// import CustomAccordionForBlogs from '../../../components/CustomAccordionForBlogs/CustomAccordionForBlogs';
// import BlogAccordionContent from '../../../components/BlogAccordionContent/BlogAccordionContent';
// import FancyText from './FancyText';
// import BookVisit from '../../../components/BookVisit/BookVisit';
// import { Link } from 'react-router-dom';
// import { FormFeaturesWrapper } from '../../home/home.style';
// import OfferForm from '../../OfferForm/OfferForm';
// import Features from '../../../components/Features/Features';
import BlogsContactSectionHindi from '@/components/BlogsContactSection/BlogsContactSectionHindi';
import CustomAccordionForBlogs from '@/components/Accordions/CustomAccordionForBlogs/CustomAccordionForBlogs';
import BlogAccordionContent from '@/components/BlogAccordionContent/BlogAccordionContent';
import FancyText from '@/components/FancyText/FancyText';
import Link from 'next/link';

const SolarInstallationContentHindi = () => {
   return (
      <>
         <Typography
            sx={{ mb: 2, padding: { xs: '20px', sm: 0, mb: 2 } }}
            variant='body1'
            component='h2'
         >
            दुनिया अक्षय ऊर्जा स्रोतों की ओर एक महत्वपूर्ण बदलाव का अनुभव कर रही
            है, और इस स्वच्छ ऊर्जा क्रांति में सौर प्रतिष्ठान सबसे आगे हैं।
            कार्बन उत्सर्जन को कम करने और जलवायु परिवर्तन को कम करने से लेकर एक
            स्थायी और लागत प्रभावी ऊर्जा समाधान प्रदान करने तक सौर ऊर्जा कई लाभ
            प्रदान करती है। इस ब्लॉग में, हम सौर प्रतिष्ठानों के प्रकारों का पता
            लगाएंगे और प्रारंभिक योजना से लेकर अंतिम कनेक्शन तक, सौर स्थापना
            प्रक्रिया के माध्यम से आपका मार्गदर्शन करेंगे, ताकि आप एक हरित और
            अधिक टिकाऊ भविष्य की ओर अपनी यात्रा शुरू कर सकें।
         </Typography>

         <CustomAccordionForBlogs
            title='3सौर प्रतिष्ठानों के लाभ'
            sx={{ mb: 2 }}
            defaultExpanded={true}
         >
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                     नवीकरणीय और टिकाऊ ऊर्जा:
                  </Typography>
                  <Typography>
                     सूर्य ऊर्जा का एक प्रचुर स्रोत है, और सौर प्रतिष्ठान
                     फोटोवोल्टिक (पीवी) या केंद्रित सौर ऊर्जा (सीएसपी)
                     प्रणालियों के माध्यम से इस ऊर्जा का उपयोग करते हैं।
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                     कम ऊर्जा लागत:
                  </Typography>
                  <Typography>
                     सौर ऊर्जा घर के मालिकों, व्यवसायों और समुदायों को अपनी
                     बिजली उत्पन्न करने, ग्रिड पर निर्भरता कम करने और संभावित
                     रूप से ऊर्जा बिलों को कम करने की अनुमति देती है।
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                     ऊर्जा स्वतंत्रता:
                  </Typography>
                  <Typography>
                     सौर प्रतिष्ठान अधिक ऊर्जा स्वतंत्रता प्रदान करते हैं, जो
                     बिजली का एक विश्वसनीय और विकेन्द्रीकृत स्रोत प्रदान करते
                     हैं जो मूल्य में उतार-चढ़ाव या आपूर्ति में व्यवधान के अधीन
                     नहीं है।
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                     दीर्घकालिक वित्तीय लाभ:
                  </Typography>
                  <Typography>
                     सौर पैनलों में निवेश करने से दीर्घकालिक वित्तीय बचत के
                     साथ-साथ टैक्स क्रेडिट, छूट और नेट मीटरिंग प्रोग्राम जैसे
                     संभावित प्रोत्साहन भी मिल सकते हैं।
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                     <FancyText>
                        सोलरूफ ईएमआई सेवाओं के साथ मुफ़्त राष्ट्रीय सौर सब्सिडी
                        आवेदन प्रदान करता है हमारे साथ एक सौर स्थापना पूछताछ
                        बनाएँ (बटन): आपके इलाके में शीर्ष इंस्टॉलरों से उद्धरण
                     </FancyText>
                  </Box>
                  {/* <BookVisit /> */}
               </Box>
            </BlogAccordionContent>
         </CustomAccordionForBlogs>

         <Box sx={{ mb: 2 }}>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
            सौर प्रतिष्ठानों के प्रकार
            </Typography>
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                  आवासीय सौर प्रतिष्ठान:
                  </Typography>
                  <Typography>
                  घर के मालिक व्यक्तिगत उपयोग के लिए बिजली उत्पन्न करने के लिए छत पर सौर पैनल स्थापित कर सकते हैं, अतिरिक्त ऊर्जा को अक्सर ग्रिड में वापस फीड किया जाता है।

                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                  वाणिज्यिक और औद्योगिक प्रतिष्ठान:
                  </Typography>
                  <Typography>
                  परिचालन लागत को कम करने, स्थिरता के प्रयासों को बढ़ाने और अपनी कॉर्पोरेट छवि को बेहतर बनाने के लिए व्यवसाय और उद्योग तेजी से सौर ऊर्जा को अपना रहे हैं।
                  </Typography>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                  यूटिलिटी-स्केल सोलर इंस्टालेशन
                  </Typography>
                  <Typography>
                  बड़े पैमाने पर सौर फार्म या सौर ऊर्जा संयंत्र अक्षय ऊर्जा के उत्पादन में महत्वपूर्ण योगदान देते हैं, समुदायों को बिजली प्रदान करते हैं और जीवाश्म ईंधन-आधारित बिजली संयंत्रों पर निर्भरता कम करते हैं।
                  </Typography>
               </Box>
            </BlogAccordionContent>
         </Box>

         <Box sx={{ mb: 2 }}>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
            सौर स्थापना प्रक्रिया:
            </Typography>
            <BlogAccordionContent>
               <Box>
                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                  प्रारंभिक मूल्यांकन और योजना:
                  </Typography>

                  <Box sx={{ pl: 2 }}>
                     <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold' }}
                     >
                    साइट का मूल्यांकन:
                     </Typography>
                     <Typography>
                    एक सोलर इंस्टालर रूफ ओरिएंटेशन, शेडिंग और स्ट्रक्चरल इंटीग्रिटी जैसे कारकों पर विचार करते हुए सोलर पैनल के लिए आपकी संपत्ति की उपयुक्तता का आकलन करेगा।
                     </Typography>

                     <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold', mt: 2 }}
                     >
                       ऊर्जा विश्लेषण
                     </Typography>
                     <Typography>
                     इष्टतम सिस्टम आकार निर्धारित करने और संभावित ऊर्जा उत्पादन का अनुमान लगाने के लिए इंस्टॉलर आपके ऊर्जा खपत पैटर्न का विश्लेषण करेगा।


                     </Typography>

                     <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold', mt: 2 }}
                     >
                        वित्तीय विचार
                     </Typography>
                     <Typography>
                     वित्तपोषण विकल्प, प्रोत्साहन और उपलब्ध छूट की खोज आपके सौर स्थापना की व्यवहार्यता और वित्तीय लाभों को निर्धारित करने में मदद करेगी।

                     </Typography>
                  </Box>

                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 4 }}>
                  सिस्टम डिजाइन और अनुमति:
                  </Typography>

                  <Box sx={{ pl: 2 }}>
                     <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold' }}
                     >
                        सिस्टम डिजाइन:
                     </Typography>
                     <Typography>
                     मूल्यांकन के आधार पर, इंस्टॉलर एक सौर प्रणाली डिजाइन करेगा जो ऊर्जा उत्पादन को अधिकतम करता है और आपकी विशिष्ट आवश्यकताओं के अनुरूप होता है।
                     </Typography>
                  </Box>

                  <Box sx={{ mt: 5 }}>
                     <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                     3.2 Kw सिस्टम के लिए नमूना 3D सोलर डिज़ाइन यहाँ देखें:
                     </Typography>

                     <Box sx={{ ml: 2, my: 1 }}>
                        <Link
                           href='https://drive.google.com/file/d/1B_-xRmQ94s2g1jz3JvXWvs4ZOgYx8yvC/view?usp=sharing'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <Typography
                              variant='body1'
                              component='span'
                              color='primary'
                           >
                              https://drive.google.com/file/d/1B_-xRmQ94s2g1jz3JvXWvs4ZOgYx8yvC/view?usp=sharing
                           </Typography>
                        </Link>
                     </Box>

                     <Typography variant='body1'>
                     Solruf सोलर साइट विजिट प्रदान करता है और आपके सोलर इंस्टालेशन सिस्टम को डिजाइन करने के लिए पावर जनरेशन रिपोर्ट के साथ एक 3D लेआउट तैयार करता है।
                     </Typography>
                  </Box>

                  {/* <FormFeaturesWrapper>
                     <OfferForm />
                     <Features />
                  </FormFeaturesWrapper> */}

                  <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                  अनुमति और कागजी कार्रवाई:
                  </Typography>
                  <Typography>
                  इंस्टॉलर आवश्यक परमिट, कागजी कार्रवाई और स्थापना के लिए आवश्यक किसी भी उपयोगिता इंटरकनेक्शन समझौते को संभालेगा।
                  </Typography>

                  <Box>
                     <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                     उपकरण खरीद:
                     </Typography>

                     <Box sx={{ pl: 2 }}>
                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold' }}
                        >
                           सौर पैनल चयन:
                        </Typography>
                        <Typography>
                        इंस्टॉलर आपको दक्षता, स्थायित्व और वारंटी के आधार पर सबसे उपयुक्त सौर पैनल चुनने में मदद करेगा।
                        </Typography>

                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                           इन्वर्टर चयन:
                        </Typography>
                        <Typography>
                        इन्वर्टर सौर पैनलों द्वारा उत्पादित डीसी ऊर्जा को प्रयोग करने योग्य एसी ऊर्जा में परिवर्तित करते हैं। इंस्टॉलर आपके सिस्टम के लिए सही प्रकार के इन्वर्टर का चयन करने में सहायता करेगा।
                        </Typography>
                     </Box>

                     <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold', mt: 4 }}
                     >
                    स्थापना:
                     </Typography>

                     <Box sx={{ pl: 2 }}>
                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold' }}
                        >
                           छत की तैयारी: 
                        </Typography>
                        <Typography>
                        यदि आवश्यक हो, तो इंस्टॉलर यह सुनिश्चित करने के लिए आवश्यक मरम्मत या उन्नयन करेगा कि छत सौर पैनलों का समर्थन करने के लिए तैयार है
                        </Typography>

                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                          पैनलों को माउंट करना:
                        </Typography>
                        <Typography>
                        छत पर रैकिंग या माउंटिंग सिस्टम स्थापित किए जाते हैं, सौर पैनलों को सूरज की रोशनी के संपर्क के लिए इष्टतम स्थिति में सुरक्षित रूप से एंकरिंग करते हैं।

                        </Typography>

                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                        तारों और बिजली के काम:
                        </Typography>
                        <Typography>
                        सौर पैनल तारों से जुड़े होते हैं, और बिजली के प्रवाह को सक्षम करने के लिए इनवर्टर और मीटर जैसे बिजली के घटक स्थापित होते हैं।
                        </Typography>
                     </Box>

                     <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold', mt: 4 }}
                     >
                        निरीक्षण और इंटरकनेक्शन:
                     </Typography>

                     <Box sx={{ pl: 2 }}>
                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold' }}
                        >
                          स्थानीय निरीक्षण:
                        </Typography>
                        <Typography>
                        सुरक्षा और कोड आवश्यकताओं के अनुपालन को सुनिश्चित करने के लिए स्थानीय प्राधिकरण या उपयोगिता का एक प्रतिनिधि सौर स्थापना का निरीक्षण कर सकता है।
                        </Typography>

                        <Typography
                           variant='subtitle1'
                           sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                          यूटिलिटी इंटरकनेक्शन:
                        </Typography>
                        <Typography>
                        एक बार जब सिस्टम निरीक्षण पास कर लेता है, तो यूटिलिटी कंपनी इंटरकनेक्शन प्रक्रिया को अंतिम रूप दे देगी, जिससे आप ग्रिड को निर्यात की गई अतिरिक्त ऊर्जा के लिए क्रेडिट प्राप्त कर सकेंगे।
                        </Typography>
                     </Box>
                  </Box>
               </Box>
            </BlogAccordionContent>
         </Box>

         <BlogsContactSectionHindi />
      </>
   );
};

export default SolarInstallationContentHindi;
