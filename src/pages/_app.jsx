import React, { useState, useEffect } from 'react';

import { ContextProvider } from '../hooks/appContext';

import '../styles/styles.css';

function CustomApp({ Component, pageProps }) {
  const [status, setStatus] = useState('loading');
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const [language, setLanguage] = useState({});

  useEffect(() => {
    const storageLanguage = localStorage.getItem('language');
    if (storageLanguage) setSelectedLanguage(storageLanguage);
  }, []);

  useEffect(() => {
    let controller, signal;

    async function fetchLanguage() {
      controller = new AbortController;
      signal = controller.signal;

      setStatus('loading');

      const languageData = await fetch(`/languages/${ selectedLanguage }.json`, { signal })
        .then(res => res.json())
        .catch(() => null);

      setLanguage(languageData || {});
      setStatus('iddle');

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
      <Component
        { ...pageProps }
        language={ language }
        setSelectedLanguage={ setSelectedLanguage }
      />
    </ContextProvider>
  );
}

export default CustomApp;