import React from 'react';
import Head from 'next/head';

import Menu from './Menu';

function Layout({
  children,
  background
}) {
  return (
    <div className={ [background, 'layout'].join(' ') }>
      <Head>
        <title>My Miles · Animal Crossing daily tasks</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐭</text></svg>"
        />
      </Head>
      { children }
      <Menu />
    </div>
  );
}

export default Layout;