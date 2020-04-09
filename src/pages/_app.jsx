import React from 'react';

import '../styles/styles.css';

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default CustomApp;