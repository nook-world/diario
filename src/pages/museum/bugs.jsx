import React from 'react';

import Layout from '../../components/Layout';
import CreaturesList from '../../components/CreaturesList';

import styles from '../../styles/pages/museum.module.css';

function Page({ language }) {
  return (
    <Layout
      background={ styles.bugsBackground }
    >
      <h1>{ language.museum } ({ language.bugs })</h1>
      <CreaturesList language={ language } type="bugs" />
    </Layout>
  );
}

export default Page;