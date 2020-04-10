import React, { useState, useEffect } from 'react';

import styles from '../styles/components/CurrentDate.module.css';

function CurrentDate({ language }) {
  const [date, setDate] = useState({})
  const weeks = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat'
  ];

  useEffect(() => {
    const currentDate = new Date();
    const state = {
      day: (currentDate.getDate()).toString().padStart(2, '0'),
      month: (currentDate.getMonth() + 1).toString().padStart(2, '0'),
      week: weeks[currentDate.getDay()]
    }
    setDate(state);
  }, []);


  return (
    <span className={ styles.currentDate }>
      { language[date.week] } · { date.day }/{ date.month }
    </span>
  );
}

export default CurrentDate;