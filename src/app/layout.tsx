import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import EndScripts from './components/EndScripts';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LavaLove NJ',
  description:
    'LavaLove provides showers and basic care to the New Jersey homeless.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>LavaLove</title>
        <meta
          name='description'
          content='LavaLove provides showers and basic care to the New Jersey homeless.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/png' sizes='any' href='/favicon.png' />
        {/*bootstrap CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/bootstrap.min.css'
          type='text/css'
          media='all'
        />
        {/*carousel CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/owl.carousel.min.css'
          type='text/css'
          media='all'
        />
        {/*animate CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/animate.css'
          type='text/css'
          media='all'
        />
        {/*animated-text CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/animated-text.css'
          type='text/css'
          media='all'
        />
        {/*font-awesome CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/all.min.css'
          type='text/css'
          media='all'
        />
        {/*font-flaticon CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/flaticon.css'
          type='text/css'
          media='all'
        />
        {/*theme-default CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/theme-default.css'
          type='text/css'
          media='all'
        />
        {/*meanmenu CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/meanmenu.min.css'
          type='text/css'
          media='all'
        />
        {/*Main Style CSS*/}
        <link rel='stylesheet' href='/style.css' type='text/css' media='all' />
        {/*transitions CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/owl.transitions.css'
          type='text/css'
          media='all'
        />
        {/*responsive CSS*/}
        <link
          rel='stylesheet'
          href='/assets/css/responsive.css'
          type='text/css'
          media='all'
        />
        {/*modernizr js*/}
        {/*bootstrap icons*/}
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css'
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ScrollUp />
        <EndScripts />
      </body>
    </html>
  );
}
