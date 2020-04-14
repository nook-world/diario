import React from "react";

import Layout from "../../components/Layout";
import MuseumList from "../../components/MuseumList";

import styles from "../../styles/pages/museum.module.css";

function Page({ language }) {
  return (
    <Layout background={styles.fossilsBackground}>
      <h1>
        {language.museum} ({language.fossils})
      </h1>
      <MuseumList language={language} type="fossils" />
    </Layout>
  );
}

export default Page;
