import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Daily from './icons/Daily';
import Creatures from './icons/Creatures';
import Case from './icons/Case';

import styles from '../styles/components/Menu.module.css';

function Menu({ selected }) {
  const route = useRouter();

  const [, menuActivated] = route.pathname.split("/");

  const enumMenu = {
    Daily: '',
    Creatures: 'creatures',
    Settings: 'settings'
  }

  const items = [
    {
      label: 'Daily',
      Icon: Daily,
      path: '/'
    },
    {
      label: 'Creatures',
      Icon: Creatures,
      path: '/creatures/bugs'
    },
    {
      label: 'Settings',
      Icon: Case,
      path: '/settings'
    }
  ];

  return (
    <nav className={styles.menu}>
      {
        items.map((item, index) => {
          const linkClasses = [styles.menuItem];
          if (menuActivated === enumMenu[item.label]) {
            linkClasses.push(styles.menuActive);
          }

          return (
            <Link
              key={`menu-${index}`}
              href={item.path}
            >
              <a
                className={linkClasses.join(' ')}
              >
                <item.Icon className={styles.menuIcon} />
                <span className={styles.menuLabel}>
                  {item.label}
                </span>
              </a>
            </Link>
          )
        })
      }
    </nav>
  );
}

export default Menu;
