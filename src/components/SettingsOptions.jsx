import React, { useState, useEffect, useRef } from 'react';

import styles from '../styles/components/SettingsOptions.module.css';

function SettingsOptions() {
  const [status, setStatus] = useState('');
  const [data, setData] = useState({});
  const [reseted, setReseted] = useState({
    tasks: false,
    bugs: false,
    fishes: false
  });
  const inputFile = useRef(null);

  useEffect(() => {
    const storage = {
      tasks: JSON.parse(localStorage.getItem('tasks')),
      bugs: JSON.parse(localStorage.getItem('bugs')),
      fishes: JSON.parse(localStorage.getItem('fishes'))
    };

    setData("data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storage)));
  }, []);

  function readJson() {
    const file = inputFile.current.files[0];

    if (!file) return setStatus('Add a file to import.');

    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = (event) => {
      try {
        const backup = JSON.parse(event.target.result);
        console.log(backup);
        if (backup.tasks) localStorage.setItem('tasks', backup.tasks);
        if (backup.bugs) localStorage.setItem('bugs', backup.bugs);
        if (backup.fishes) localStorage.setItem('fishes', backup.fishes);
        setStatus('Your backup is back!');
      } catch (error) {
        setStatus('Error parsing file.');
      }
    }
  }

  return (
    <nav className={ styles.settingsOptions }>
      <h2>Backup data</h2>
      <p>
        <a href={ data } className="button" download="my-miles-backup.json">
          Export
        </a>
        <br />
        Get my tasks and milestones to use in other place.
      </p>
      <p>
        <input
          type="file"
          ref={ inputFile }
          accept="application/JSON"
        />
        <button
          className="button"
          onClick={ readJson }
        >
          Import
        </button>
        {
          status &&
          <>
            <br />
            <span className={ styles.settingsOptionsFeedback }>{ status }</span>
          </>
        }
        <br />
        Get the data you already exported.
      </p>
      <img src="/assets/rule-confetti-brown.svg" alt="Rule Confetti Brow"/>
      <h2>Remove content (DAAANGER)</h2>
      <p>
        {
          reseted.tasks &&
          <>Tasks reseted</>
        }
        {
          !reseted.tasks &&
          <button
            className="button buttonDanger"
            onClick={ () => {
              setReseted({ ...setReseted, tasks: true });
              localStorage.removeItem('tasks');
            } }
          >
            Undo Tasks
          </button>
        }
      </p>
      <p>
        {
          reseted.bugs &&
          <>Bugs reseted</>
        }
        {
          !reseted.bugs &&
          <button
            className="button buttonDanger"
            onClick={ () => {
              setReseted({ ...setReseted, bugs: true });
              localStorage.removeItem('bugs');
            } }
          >
            Uncheck Bugs
          </button>
        }
      </p>
      <p>
        {
          reseted.fishes &&
          <>Fishes reseted</>
        }
        {
          !reseted.fishes &&
          <button
            className="button buttonDanger"
            onClick={ () => {
              setReseted({ ...setReseted, fishes: true });
              localStorage.removeItem('fishes');
            } }
          >
            Uncheck Fishes
          </button>
        }
      </p>
      <p>
        <button
          className="button buttonDanger"
          onClick={ () => {
            setReseted({ tasks: true, bugs: true, fishes: true });
            localStorage.clear();
          } }
        >
          Clean All
        </button>
      </p>
    </nav>
  );
}

export default SettingsOptions;