import React from 'react';

import Bugs from './icons/Bugs';
import Fishes from './icons/Fishes';

import styles from '../styles/components/CreaturesSwitch.module.css';

function CreaturesSwitch({ active, setType }) {
  const bugClasses = [ styles.creaturesSwitchButton ];
  const fishClasses = [ styles.creaturesSwitchButton ];

  if (active === 'bugs') {
    bugClasses.push(styles.creaturesSwitchButtonActive)
  } else {
    fishClasses.push(styles.creaturesSwitchButtonActive)
  }


  return (
    <div className={ styles.creaturesSwitch }>
      <button
        className={ bugClasses.join(' ') }
        onClick={ () => setType('bugs') }
      >
        <Bugs />
        Bugs
      </button>
      <button
        className={ fishClasses.join(' ') }
        onClick={ () => setType('fishes') }
      >
        <Fishes />
        Fishes
      </button>
    </div>
  );
}

export default CreaturesSwitch;