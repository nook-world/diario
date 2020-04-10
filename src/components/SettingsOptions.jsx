import React, { useState, useEffect, useRef } from 'react';

import styles from '../styles/components/SettingsOptions.module.css';

function SettingsOptions({ language }) {
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
      tasks: localStorage.getItem('tasks'),
      bugs: localStorage.getItem('bugs'),
      fishes: localStorage.getItem('fishes')
    };

    setData("data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storage)));
  }, []);

  function readJson() {
    const file = inputFile.current.files[0];

    if (!file) return setStatus(language.addAFileToImport);

    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = (event) => {
      try {
        const backup = JSON.parse(event.target.result);
        if (backup.tasks) localStorage.setItem('tasks', backup.tasks);
        if (backup.bugs) localStorage.setItem('bugs', backup.bugs);
        if (backup.fishes) localStorage.setItem('fishes', backup.fishes);
        setStatus(language.yourBackupIsBack);
      } catch (error) {
        setStatus(language.errorParsingFile);
      }
    }
  }

  return (
    <nav className={ styles.settingsOptions }>
      <h2>{ language.backupData }</h2>
      <p>
        { language.getMyTasksAndMilestonesToUseInOtherPlace }
      </p>
      <p>
        <a href={ data } className="button" download="my-miles-backup.json">
          { language.export }
        </a>
      </p>
      <p>
        { language.getTheDataYouAlreadyExported }
        <br />
        <div class="fileArea">
          <input
            type="file"
            ref={ inputFile }
            accept="application/JSON"
            required="true"
          />
          <div class="fileDummy">
            <div class="fileSuccess">{ language.fileSelectedNowYouCanImportYourData }</div>
            <div class="fileDefault">{ language.clickToSelectAFileToImport }</div>
          </div>
        </div>
      </p>
      <p>
        <button
          className="button"
          onClick={ readJson }
        >
          { language.import }
        </button>
      </p>
      {
        status &&
        <p>
          <span className={ styles.settingsOptionsFeedback }>{ status }</span>
        </p>
      }
      <img src="/assets/rule-confetti-brown.svg" alt="Rule Confetti Brow"/>
      <h2>{ language.removeContent } ({ language.daaanger })</h2>
      <p>
        {
          reseted.tasks &&
          <>
            { language.tasksReseted }
          </>
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
            { language.resetMyTasks }
          </button>
        }
      </p>
      <p>
        {
          reseted.bugs &&
          <>{ language.bugsReseted }</>
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
            { language.uncheckBugs }
          </button>
        }
      </p>
      <p>
        {
          reseted.fishes &&
          <>{ language.fishesReseted }</>
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
            { language.uncheckFishes }
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
          { language.cleanAll }
        </button>
      </p>
    </nav>
  );
}

export default SettingsOptions;