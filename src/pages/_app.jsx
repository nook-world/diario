import React, { useState, useEffect } from 'react';

import { ContextProvider } from '../hooks/appContext';
import PageLoading from '../components/PageLoading';
import Menu from '../components/Menu';

import '../styles/styles.css';

function CustomApp({ Component, pageProps }) {
  const defaultLanguage = 'pt';
  const [status, setStatus] = useState('loading');
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    // Try to get user language, if is not one of the possibles, default to english
    const possibleLanguages = ['pt', 'en'];
    let userLanguage = 
      (navigator.userLanguage || navigator.language || defaultLanguage)
        .substring(0, 2);

    if (!possibleLanguages.includes(userLanguage)) userLanguage = defaultLanguage;

    const storageLanguage = localStorage.getItem('language');
    if (storageLanguage) setSelectedLanguage(storageLanguage || userLanguage);
  }, []);

  useEffect(() => {
    let controller, signal;

    async function fetchLanguage() {
      controller = new AbortController;
      signal = controller.signal;

      const languageData = await fetch(`/languages/${ selectedLanguage }.json?v2`, { signal })
        .then(res => res.json())
        .catch(() => null);

      if (languageData) {
        setLanguage(languageData);
        setStatus('iddle');
      }
    }

    fetchLanguage();

    return () => {
      controller && controller.abort();
    }
  }, [ selectedLanguage ]);

  return (
    <ContextProvider
      language={ language }
      setSelectedLanguage={ setSelectedLanguage }
    >
      <PageLoading status={ status } />
      <Component
        { ...pageProps }
        language={ language }
        setSelectedLanguage={ setSelectedLanguage }
      />
      <Menu
        language={ language }
      />
    </ContextProvider>
  );
}

export default CustomApp;