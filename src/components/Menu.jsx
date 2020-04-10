import React from 'react';
import Link from 'next/link';

import Daily from './icons/Daily';
import Creatures from './icons/Creatures';
import Case from './icons/Case';

import { useAppContext } from '../hooks/appContext';

import styles from '../styles/components/Menu.module.css';

function Menu() {
  const { language } = useAppContext();

  const items = [
    {
      label: language.daily,
      Icon: Daily,
      path: '/'
    },
    {
      label: language.creatures,
      Icon: Creatures,
      path: '/creatures/bugs'
    },
    {
      label: language.settings,
      Icon: Case,
      path: '/settings'
    }
  ];

  return (
    <nav className={ styles.menu }>
      {
        items.map((item, index) => (
          <Link
            key={ `menu-${ index }` }
            href={ item.path }
          >
            <a
              className={ styles.menuItem }
            >
              <item.Icon className="menu-icon" />
              <span className="menu-label">
                { item.label }
              </span>
            </a>
          </Link>
        ))
      }
    </nav>
  );
}

export default Menu;