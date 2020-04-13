import React, { useState, useEffect } from 'react';

import { ContextProvider } from '../hooks/appContext';
import PageLoading from '../components/PageLoading';
import Menu from '../components/Menu';
import * as Fathom from 'fathom-client';
import Router from 'next/router';

import '../styles/styles.css';

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function AnalyticsEffect() {
  Fathom.load(process.env.FATHOM_URL);
  Fathom.setSiteId(process.env.FATHOM_SITE_ID);
  Fathom.trackPageview();
}

function CustomApp({ Component, pageProps }) {
  const defaultLanguage = 'pt';
  const [status, setStatus] = useState('loading');
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    const possibleLanguages = ['pt', 'en'];
    let userLanguage =
      (navigator.userLanguage || navigator.language || defaultLanguage)
        .substring(0, 2);

    if (!localStorage.getItem('language')) localStorage.setItem('language', userLanguage);

    if (!possibleLanguages.includes(userLanguage)) userLanguage = defaultLanguage;

    const storageLanguage = localStorage.getItem('language');
    if (storageLanguage) setSelectedLanguage(storageLanguage || userLanguage);
  }, []);

  useEffect(AnalyticsEffect, []);

  useEffect(() => {
    let controller, signal;

    async function fetchLanguage() {
      controller = new AbortController;
      signal = controller.signal;

      const languageData = await fetch(`/languages/${selectedLanguage}.json?v2`, { signal })
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
  }, [selectedLanguage]);

  return (
    <ContextProvider
      language={language}
      setSelectedLanguage={setSelectedLanguage}
    >
      <PageLoading status={status} />
      <Component
        {...pageProps}
        language={language}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Menu
        language={language}
      />
    </ContextProvider>
  );
}

export default CustomApp;
