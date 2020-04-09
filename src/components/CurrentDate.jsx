import React, { useState, useEffect } from 'react';

import styles from '../styles/components/CurrentDate.module.css';

function CurrentDate() {
  const [date, setDate] = useState({})
  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
    <span className={ styles.currentDate }>{ date.week } · { date.day }/{ date.month }</span>
  );
}

export default CurrentDate;