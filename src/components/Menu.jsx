import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/components/Menu.module.css';

function Menu({menuItems}) {
  const route = useRouter();

  const [, menuActivated] = route.pathname.split("/");

  return (
    <nav className={styles.menu}>
      {
        menuItems.map((menuItem, index) => {
          const linkClasses = [styles.menuItem];
          if (!menuItem.visible) return null;

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
                  {menuItem.label}
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
