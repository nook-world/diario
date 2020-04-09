import React from 'react';

import styles from '../styles/components/Percentage.module.css';

function Percentage({ current, total }) {
  const percentage = (current / total * 100).toFixed(0);
  return (
    <span
      className={ styles.percentage }
      style={{
        background: `linear-gradient(
          to right,
          rgba(107, 159, 98, 0.5),
          rgba(107, 159, 98, 0.5) ${ (percentage - 0.01).toFixed(2) }%,
          #FFF ${ percentage }%,
          #FFF
        )`
      }}
    >
      { current } of { total } ({ percentage }%)
    </span>
  );
}

export default Percentage;
