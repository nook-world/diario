import React from "react";

import Layout from "../components/Layout";
import Songs from "../components/Songs/Songs";

import styles from "../styles/pages/songs.module.css";

function Page({ language }) {
  return (
    <Layout background={styles.layout}>
      <h1>{language.songs}</h1>
      <Songs language={language} />
    </Layout>
  );
}

export default Page;
