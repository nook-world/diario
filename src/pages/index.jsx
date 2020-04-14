import React from "react";

import Layout from "../components/Layout";
import Checklist from "../components/Checklist";

import styles from "../styles/pages/index.module.css";

function Page({ language }) {
  return (
    <Layout background={styles.layout}>
      <h1>{language.daily}</h1>
      <Checklist language={language} />
    </Layout>
  );
}

export default Page;
