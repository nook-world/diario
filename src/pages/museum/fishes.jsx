import React from "react";

import Layout from "../../components/Layout";
import MuseumList from "../../components/MuseumList";

import styles from "../../styles/pages/museum.module.css";

function Page({ language }) {
  return (
    <Layout background={styles.fishesBackground}>
      <h1>
        {language.museum} ({language.fishes})
      </h1>
      <MuseumList language={language} type="fishes" />
    </Layout>
  );
}

export default Page;
