import React, { useState, useEffect } from 'react';

import CurrentDate from './CurrentDate';
import Percentage from './Percentage';

import styles from '../styles/components/Checklist.module.css';

function Checklist({ language }) {
  const storageName = 'tasks';
  let tasks = [];
  if (language.tasks) {
    tasks = [...language.tasks];
  }

  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    let storage = [];
    try {
      storage = localStorage.getItem(storageName);
      storage = JSON.parse(storage) || [];
    } catch (error) {
      storage = [];
    }

    setCompletedTasks(storage);
  }, []);

  function updateTask(task) {
    let state = [...completedTasks];

    if (state.includes(task)) {
      state = state.filter(item => item !== task);
    } else {
      state.push(task);
    }
    localStorage.setItem(storageName, JSON.stringify(state))
    setCompletedTasks(state);
  }

  return (
    <div className={ styles.checklist }>
      <div className={ styles.checklistHeader }>
        <Percentage
          language={ language }
          current={ completedTasks.length }
          total={ tasks.length }
        />
        <CurrentDate language={ language } />
      </div>
      {
        tasks.map((task, index) => (
          <p key={ `task-${ index }`} className={ styles.checklistItem }>
            <label className={ styles.checklistLabel }>
              <input
                type="checkbox"
                className={ `checkbox ${ styles.checklistCheckbox }` }
                checked={ completedTasks.includes(index) }
                onChange={ () => updateTask(index) }
              />
              <span className={ styles.checklistText }>
                { task }
              </span>
            </label>
          </p>
        ))
      }
      {
        !!completedTasks.length &&
        <p className="textCenter">
          <button
            className="button buttonDanger"
            onClick={ () => {
              localStorage.removeItem('tasks');
              setCompletedTasks([]);
            } }
          >
            { language.resetMyTasks }
          </button>
        </p>
      }
    </div>
  );
}

export default Checklist;