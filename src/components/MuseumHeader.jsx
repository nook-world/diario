import React from 'react';

import MuseumSwitch from './MuseumSwitch';
import CurrentDate from './CurrentDate';
import Percentage from './Percentage';

import styles from '../styles/components/MuseumHeader.module.css';

function MuseumHeader({
  language,
  type,
  currentItems,
  totalItems
}) {
  return (
    <div className={ styles.museumHeader }>
      <MuseumSwitch
        language={ language }
        active={ type }
      />
      <div className={ styles.museumHeaderInfo }>
        <CurrentDate language={ language } />
        <Percentage
          current={ currentItems }
          total={ totalItems }
        />
      </div>
    </div>
  );
}

export default MuseumHeader;