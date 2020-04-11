import React from 'react';
import Link from 'next/link';

import Bugs from './icons/Bugs';
import Fishes from './icons/Fishes';
import Fossils from './icons/Fossils';

import styles from '../styles/components/MuseumSwitch.module.css';

function MuseumSwitch({ language, active }) {
  const switchItems = [
    {
      label: language.bugs,
      icon: <Bugs />,
      type: 'bugs',
      path: '/museum/bugs'
    },
    {
      label: language.fishes,
      icon: <Fishes />,
      type: 'fishes',
      path: '/museum/fishes'
    },
    {
      label: language.fossils,
      icon: <Fossils />,
      type: 'fossils',
      path: '/museum/fossils'
    },
  ];

  return (
    <div className={ styles.museumSwitch }>
      {
        switchItems.map(switchItem => {
          const classes = [styles.museumSwitchButton];
          if (active === switchItem.type) classes.push(styles.museumSwitchButtonActive);

          return (
              <Link href={ switchItem.path } key={ `museum-switch-${ switchItem.type }` }>
                <a
                  className={ classes.join(' ') }
                >
                  { switchItem.icon }
                  { switchItem.label }
                </a>
              </Link>
            );
          })
      }
    </div>
  );
}

export default MuseumSwitch;