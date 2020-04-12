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
      <meta charSet="utf-8" />
        <title>Diário Nook World</title>
        <meta name="application-name" content="Diário Nook World" />
        <meta name="apple-mobile-web-app-title" content="Diário Nook World" />
        <meta name="description" content="Crie e acompanhe suas metas no Animal Crossing New Horizons!" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#5bbad5" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#5bbad5" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                  
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/icons/favicon-32x32.png" />
            
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://diario.nook.world" />
        <meta name="twitter:title" content="Diário Nook World" />
        <meta name="twitter:description" content="Crie e acompanhe suas metas no Animal Crossing New Horizons!" />
        <meta name="twitter:image" content="https://diario.nook.world/twitter.png" />
        <meta name="twitter:creator" content="@NookWorldBR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Diário Nook World" />
        <meta property="og:description" content="Crie e acompanhe suas metas no Animal Crossing New Horizons!" />
        <meta property="og:site_name" content="Diário Nook World" />
        <meta property="og:url" content="https://diario.nook.world" />
        <meta property="og:image" content="https://diario.nook.world/opengraph.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      { children }
      <div className="ios-peek" />
    </div>
  );
}

export default Layout;