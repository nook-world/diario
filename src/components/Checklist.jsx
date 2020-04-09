import React, { useState } from 'react';

import CurrentDate from './CurrentDate';
import Percentage from './Percentage';

import styles from '../styles/components/Checklist.module.css';

function Checklist() {
  const tasks = [
    {
      objective: 'Check your mail'
    },
    {
      objective: 'Talk to all villagers'
    },
    {
      objective: 'Check recycle bin'
    },
    {
      objective: 'Check beach for recipes'
    },
    {
      objective: 'Check for island visitors'
    },
    {
      objective: 'Complete Nook Miles tasks'
    },
    {
      objective: 'Water your flowers'
    },
    {
      objective: 'Hit each rock'
    },
    {
      objective: 'Shake each tree'
    },
    {
      objective: 'Pickup and sell sea shells'
    },
    {
      objective: 'Find the Golden Spot and plant a money tree'
    },
    {
      objective: 'Dig up all fossils'
    },
    {
      objective: 'Shoot down presents'
    },
    {
      objective: 'Go fishing'
    },
    {
      objective: 'Go bug hunting'
    },
    {
      objective: 'Go clam hunting'
    },
    {
      objective: 'Plant flowers'
    },
    {
      objective: 'Plant trees'
    },
    {
      objective: 'Go into villagers houses for DIY recipes'
    }
  ];
  const [completedTasks, setCompletedTasks] = useState([]);

  function updateTask(task) {
    let state = [...completedTasks];

    if (state.includes(task)) {
      state = state.filter(item => item !== task);
    } else {
      state.push(task);
    }

    setCompletedTasks(state);
  }

  return (
    <div className={ styles.checklist }>
      <div className={ styles.checklistHeader }>
        <Percentage
          current={ completedTasks.length }
          total={ tasks.length }
        />
        <CurrentDate />
      </div>
      {
        tasks.map((task, index) => (
          <p key={ `task-${ index }`} className={ styles.checklistItem }>
            <label className={ styles.checklistLabel }>
              <input
                type="checkbox"
                className="checkbox"
                checked={ completedTasks.includes(index) }
                onChange={ () => updateTask(index) }
              />
              { task.objective }
            </label>
          </p>
        ))
      }
    </div>
  );
}

export default Checklist;