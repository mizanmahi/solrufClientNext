import React from 'react';

import LoaderImage from '@/assets/images/loader.svg';

import classes from './loader.module.css';
import Image from 'next/image';

const Loader = ({styles}) => {
   return (
      <div className={classes.loader_wrapper}  style={{...styles}} > 
         <Image src={LoaderImage} alt='spinner'/>
      </div>
   );
};

export default Loader;