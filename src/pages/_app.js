import { appWithTranslation } from 'next-i18next';
import { theme } from '@/MuiTheme';
import Footer from '@/components/Footer/Footer';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

function App({ Component, pageProps }) {
   return (
      <>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <Component {...pageProps} />
            </ThemeProvider>
         </Provider>
      </>
   );
}

export default appWithTranslation(App);
