import React from 'react';

import Layout from '../../components/Layout';
import CreaturesList from '../../components/CreaturesList';

import styles from '../../styles/pages/museum.module.css';

function Page({ language }) {
  return (
    <Layout
      background={ styles.fishesBackground }
    >
      <h1>{ language.museum } ({ language.fishes })</h1>
      <CreaturesList language={ language } type="fishes" />
    </Layout>
  );
}

export default Page;