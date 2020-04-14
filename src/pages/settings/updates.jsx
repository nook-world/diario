import React from "react";

import Layout from "../../components/Layout";
import Updates from "../../components/Updates";
import updateMessages from "../../updates";

import styles from "../../styles/pages/updates.module.css";
import Link from "next/link";

function Page({ language }) {
  return (
    <Layout background={styles.layout}>
      <h1>{language.updatesTitle}</h1>
      <Link href="/settings">
        <a className={`${styles.backLink} button`}>{language.backToSettings}</a>
      </Link>
      <Updates language={language} updates={updateMessages} />
      <h4>Hi</h4>
    </Layout>
  );
}

export default Page;
