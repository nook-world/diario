import React from 'react';

import Layout from '../../components/Layout';
import CreaturesList from '../../components/CreaturesList';

import { useAppContext } from '../../hooks/appContext';

import styles from '../../styles/pages/creatures.module.css';

function Page() {
  const { language } = useAppContext();
  return (
    <Layout
      background={ styles.bugsBackground }
    >
      <h1>{ language.creatures } ({ language.fishes })</h1>
      <CreaturesList language={ language } type="fishes" />
    </Layout>
  );
}

export default Page;