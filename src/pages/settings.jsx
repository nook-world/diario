import React from 'react';

import Layout from '../components/Layout';
import SettingsOptions from '../components/SettingsOptions';

import styles from '../styles/pages/settings.module.css';

function Page({ language }) {
  return (
    <Layout
      background={ styles.layout }
    >
      <h1>{ language.settings }</h1>
      <SettingsOptions language={ language } />
    </Layout>
  )
}

export default Page;