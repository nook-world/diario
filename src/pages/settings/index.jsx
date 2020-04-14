import React from "react";

import Layout from "../../components/Layout";
import SettingsOptions from "../../components/SettingsOptions";
import Link from "next/link";

import styles from "../../styles/pages/settings.module.css";

function Page({ language, setSelectedLanguage }) {
  return (
    <Layout background={styles.layout}>
      <h1>{language.settings}</h1>
      <Link href="/settings/updates">
        <a className={`${styles.updatesButton} button`}>
          {language.seeLatestUpdates}
        </a>
      </Link>
      <SettingsOptions
        language={language}
        setSelectedLanguage={setSelectedLanguage}
      />
    </Layout>
  );
}

export default Page;
