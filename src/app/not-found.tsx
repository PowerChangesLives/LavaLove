import NotFound404 from './components/NotFound404';
import RootLayout from './layout';

import { NextPage } from 'next';
import React from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <>
      <NotFound404 />
    </>
  );
};

NotFoundPage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default NotFoundPage;
