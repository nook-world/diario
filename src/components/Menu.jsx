import React from 'react';
import Link from 'next/link';

import Daily from './icons/Daily';
import Creatures from './icons/Creatures';

import styles from '../styles/components/Menu.module.css';

function Menu({ selected }) {
  const items = [
    {
      label: 'Daily',
      Icon: Daily,
      path: '/'
    },
    {
      label: 'Creatures',
      Icon: Creatures,
      path: '/creatures'
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