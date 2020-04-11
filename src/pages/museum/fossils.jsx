import React from 'react';

import Layout from '../../components/Layout';
import FossilsList from '../../components/FossilsList';

import styles from '../../styles/pages/museum.module.css';

function Page({ language }) {
  return (
    <Layout
      background={ styles.fossilsBackground }
    >
      <h1>{ language.museum } ({ language.fossils })</h1>
      <FossilsList language={ language } />
    </Layout>
  );
}

export default Page;