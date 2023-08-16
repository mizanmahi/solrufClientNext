import { Inter } from 'next/font/google';
// import Blogs from './blogs';
import PrimaryHeader from '@/components/PrimaryHeader/PrimaryHeader';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   return (
      <main className={`${inter.className}`}>
         <PrimaryHeader />
      </main>
   );
}

Home.getLayout = async function (){
   
}