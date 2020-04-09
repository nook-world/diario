import React from 'react';

import Layout from '../components/Layout';
import SettingsOptions from '../components/SettingsOptions';

import styles from '../styles/pages/settings.module.css';

function Page() {
  return (
    <Layout
      background={ styles.layout }
    >
      <h1>Settings</h1>
      <SettingsOptions />
    </Layout>
  )
}

export default Page;