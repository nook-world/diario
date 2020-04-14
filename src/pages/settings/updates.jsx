import React from "react";

import Layout from "../../components/Layout";
import Updates from "../../components/Updates";
import updateMessages from "../../updates";

import styles from "../../styles/pages/updates.module.css";

function Page({ language }) {
  return (
    <Layout background={styles.layout}>
      <h1>{language.updatesTitle}</h1>
      
      <Updates language={language} updates={updateMessages} />
    </Layout>
  );
}

export default Page;
