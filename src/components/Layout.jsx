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
        <meta name='apple-mobile-web-app-title' content="My Miles" />
        <meta name='description' content='Create your milestones on Animal Crossing New Horizons' />
        <link rel='shortcut icon' href='/icons/favicon-32x32.png' />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta charSet='utf-8' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='format-detection' content='telephone=no' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#5bbad5" />
        <meta name="theme-color" content="#5bbad5" />
      </Head>
      { children }
      <div className="ios-peek" />
    </div>
  );
}

export default Layout;