import React from 'react';

import Layout from '../../components/Layout';
import CreaturesList from '../../components/CreaturesList';

import styles from '../../styles/pages/creatures.module.css';

function Page() {
  return (
    <Layout
      background={ styles.bugsBackground }
    >
      <h1>Creatures (bugs)</h1>
      <CreaturesList type="bugs" />
    </Layout>
  );
}

export default Page;