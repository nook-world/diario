import React from 'react';

import { ContextProvider } from '../hooks/appContext';
import useLanguage from '../hooks/language';
import useAnalytics from '../hooks/analytics';
import useMenu from '../hooks/menu';
import Menu from '../components/Menu';

import '../styles/styles.css';

function CustomApp({ Component, pageProps }) {
  const [ language, setSelectedLanguage ] = useLanguage();
  const [ menuItems, setMenuItems ] = useMenu(language);

  useAnalytics();

  return (
    <ContextProvider
      language={language}
      setSelectedLanguage={setSelectedLanguage}
      menuItems={menuItems}
      setMenuItems={setMenuItems}
    >
      <Component
        {...pageProps}
        language={language}
        setSelectedLanguage={setSelectedLanguage}
        setMenuItems={setMenuItems}
      />
      <Menu menuItems={menuItems} />
    </ContextProvider>
  );
}

export default CustomApp;
