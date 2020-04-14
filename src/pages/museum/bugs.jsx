import React from "react";

import Layout from "../../components/Layout";
import MuseumList from "../../components/MuseumList";

import styles from "../../styles/pages/museum.module.css";

function Page({ language }) {
  return (
    <Layout background={styles.bugsBackground}>
      <h1>
        {language.museum} ({language.bugs})
      </h1>
      <MuseumList language={language} type="bugs" />
    </Layout>
  );
}

export default Page;
