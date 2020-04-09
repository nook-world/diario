import React from 'react';

import Layout from '../../components/Layout';
import CreaturesList from '../../components/CreaturesList';

import styles from '../../styles/pages/creatures.module.css';

function Page() {
  return (
    <Layout
      background={ styles.fishesBackground }
    >
      <h1>Creatures (fishes)</h1>
      <CreaturesList type="fishes" />
    </Layout>
  );
}

export default Page;