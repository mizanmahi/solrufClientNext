import React from 'react';
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader';
import Footer from '../Footer/Footer';

const PrimaryLayout = ({ children }) => {
   return (
      <div>
         <PrimaryHeader />
         {children}
         <Footer />
      </div>
   );
};

export default PrimaryLayout;
