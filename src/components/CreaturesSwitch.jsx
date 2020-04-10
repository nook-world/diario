import React from 'react';
import Link from 'next/link';

import Bugs from './icons/Bugs';
import Fishes from './icons/Fishes';

import styles from '../styles/components/CreaturesSwitch.module.css';

function CreaturesSwitch({ language, active }) {
  const bugClasses = [ styles.creaturesSwitchButton ];
  const fishClasses = [ styles.creaturesSwitchButton ];

  if (active === 'bugs') bugClasses.push(styles.creaturesSwitchButtonActive);
  if (active === 'fishes') fishClasses.push(styles.creaturesSwitchButtonActive);

  return (
    <div className={ styles.creaturesSwitch }>
      <Link href="/creatures/bugs">
        <a
          className={ bugClasses.join(' ') }
        >
          <Bugs />
          { language.bugs }
        </a>
      </Link>
      <Link href="/creatures/fishes">
        <a
          className={ fishClasses.join(' ') }
        >
          <Fishes />
          { language.fishes }
        </a>
      </Link>
    </div>
  );
}

export default CreaturesSwitch;