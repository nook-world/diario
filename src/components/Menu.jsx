import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Daily from './icons/Daily';
import Creatures from './icons/Creatures';
import Case from './icons/Case';

import styles from '../styles/components/Menu.module.css';

function Menu({ language }) {
  const route = useRouter();

  const [, menuActivated] = route.pathname.split("/");

  const menuItems = [
    {
      label: 'daily',
      Icon: Daily,
      path: '/',
      rootPath: ''
    },
    {
      label: 'creatures',
      Icon: Creatures,
      path: '/creatures/bugs',
      rootPath: 'creatures'
    },
    {
      label: 'settings',
      Icon: Case,
      path: '/settings',
      rootPath: 'settings'
    }
  ];

  return (
    <nav className={styles.menu}>
      {
        menuItems.map((menuItem, index) => {
          const linkClasses = [styles.menuItem];
          if (menuActivated === menuItem.rootPath) {
            linkClasses.push(styles.menuActive);
          }

          return (
            <Link
              key={`menu-${index}`}
              href={menuItem.path}
            >
              <a
                className={linkClasses.join(' ')}
              >
                <menuItem.Icon className={styles.menuIcon} />
                <span className={styles.menuLabel}>
                  {language[menuItem.label]}
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
