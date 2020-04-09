import React, { useState } from 'react';

import Layout from '../components/Layout';
import CreaturesList from '../components/CreaturesList';

import styles from '../styles/pages/creatures.module.css';

function Page() {
  const [ type, setType ] = useState('bugs');

  return (
    <Layout
      background={ styles[`${ type }Background`] }
    >
      <h1>Creatures ({ type })</h1>
      <CreaturesList type={ type } setType={ setType } />
    </Layout>
  );
}

export default Page;