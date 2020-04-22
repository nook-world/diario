import React from "react";

import MuseumSwitch from "./MuseumSwitch";
import CurrentDate from "./CurrentDate";
import Percentage from "./Percentage";

import styles from "../styles/components/MuseumHeader.module.css";

function MuseumHeader({ language, type, currentItems, totalItems }) {
  return (
    <div className={styles.museumHeader}>
      <MuseumSwitch language={language} active={type} />
      <CurrentDate language={language} />
      <p>
        <Percentage current={currentItems} total={totalItems} />
      </p>
    </div>
  );
}

export default MuseumHeader;
