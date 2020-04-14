import React from "react";

import styles from "../styles/components/PageLoading.module.css";

function PageLoading({ status }) {
  return <div className={styles[`pageLoading${status}`]} />;
}

export default PageLoading;
