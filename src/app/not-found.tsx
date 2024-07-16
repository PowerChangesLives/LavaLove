import { NextPageWithLayout } from './_app';
import NotFound404 from './components/NotFound404';
import RootLayout from './layout';
import React from 'react';

const NotFoundPage: NextPageWithLayout = () => {
  return <NotFound404 />;
};

NotFoundPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout navbarAlwaysActive>{page}</RootLayout>;
};

export default NotFoundPage;
