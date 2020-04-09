import React from 'react';

import Layout from '../components/Layout';
import Checklist from '../components/Checklist';

import styles from '../styles/pages/index.module.css';

function Page() {
  return (
    <Layout
      background={ styles.layout }
    >
      <h1>Daily</h1>
      <Checklist />
    </Layout>
  );
}

export default Page;