import React from 'react';
import Head from 'next/head';

function Layout({
  children,
  background
}) {
  const version = 2;
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
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#5bbad5" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#5bbad5" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                  
        <link rel="apple-touch-icon" sizes="180x180" href={ `/apple-touch-icon.png?v=${ version }` } />
        <link rel="icon" type="image/png" sizes="32x32" href={ `/favicon-32x32.png?v=${ version }` } />
        <link rel="icon" type="image/png" sizes="16x16" href={ `/favicon-16x16.png?v=${ version }` } />
        <link rel="manifest" href={ `/manifest.json?v=${ version }` } />
        <link rel="mask-icon" href={ `/safari-pinned-tab.svg?v=${ version }` } color="#5bbad5" />
        <link rel="shortcut icon" href={ `/favicon-32x32.png?v=${ version }` } />

        <link
          rel="apple-touch-startup-image"
          href="/splash/640x1136-splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/750x1334-splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
         <link
          rel="apple-touch-startup-image"
          href="/splash/1125x2436-splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/1242x2688-splash.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/1536x2048-splash.png"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/1668x2388-splash.png"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" 
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/2048x2732-splash.png"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />

            
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