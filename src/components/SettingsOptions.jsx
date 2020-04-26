import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import ArrowRight from "./icons/ArrowRight";
import DisplayOptions from "./DisplayOptions";

import styles from "../styles/components/SettingsOptions.module.css";

function SettingsOptions({ language, setSelectedLanguage }) {
  const [status, setStatus] = useState("");
  const [data, setData] = useState({});
  const [reseted, setReseted] = useState({
    tasks: false,
    bugs: false,
    fishes: false,
    fossils: false,
  });
  const inputFile = useRef(null);

  useEffect(() => {
    const storage = {
      tasks: localStorage.getItem("tasks"),
      bugs: localStorage.getItem("bugs"),
      fishes: localStorage.getItem("fishes"),
      fossils: localStorage.getItem("fossils"),
    };

    setData(
      "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(storage))
    );
  }, []);

  function changeLanguage(language) {
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
  }

  function readJson() {
    const file = inputFile.current.files[0];

    if (!file) return setStatus(language.addAFileToImport);

    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (event) => {
      try {
        const backup = JSON.parse(event.target.result);
        if (backup.tasks) localStorage.setItem("tasks", backup.tasks);
        if (backup.bugs) localStorage.setItem("bugs", backup.bugs);
        if (backup.fishes) localStorage.setItem("fishes", backup.fishes);
        if (backup.fossils) localStorage.setItem("fossils", backup.fossils);
        setStatus(language.yourBackupIsBack);
      } catch (error) {
        setStatus(language.errorParsingFile);
      }
    };
  }

  const languages = [
    {
      short: "pt",
      full: "Português",
      country: "Brazil",
    },
    {
      short: "en",
      full: "English",
      country: "USA",
    },
  ];

  return (
    <nav className={styles.settingsOptions}>
      <p>
        <Link href="/settings/updates">
          <a className="button">
            {language.seeLatestUpdates}
            <ArrowRight />
          </a>
        </Link>
      </p>
      <h2>{language.language}</h2>
      <p>{language.chooseTheDesiredLanguage}</p>
      <p>
        {languages.map((languageInfo) => {
          const classes = [styles.settingsOptionsChangeLanguage];
          if (language.selectedLanguage === languageInfo.short) {
            classes.push(styles.settingsOptionsChangeLanguageSelected);
          }
          return (
            <button
              key={`language-selector-${languageInfo.short}`}
              className={classes.join(" ")}
              onClick={() => changeLanguage(languageInfo.short)}
            >
              <img
                src={`/languages/${languageInfo.short}.png`}
                className={styles.settingsOptionsFlag}
                alt={languageInfo.country}
              />
              {languageInfo.full}
            </button>
          );
        })}
      </p>

      <DisplayOptions language={language} />

      <h2>{language.backupData}</h2>
      <p>{language.getMyTasksAndMilestonesToUseInOtherPlace}</p>
      <p>
        <a href={data} className="button" download="my-miles-backup.json">
          {language.export}
        </a>
      </p>
      <p>
        {language.getTheDataYouAlreadyExported}
        <br />
        <label className="fileArea">
          <input
            type="file"
            ref={inputFile}
            accept="application/JSON"
            required
          />
          <span className="fileDummy">
            <span className="fileSuccess">
              {language.fileSelectedNowYouCanImportYourData}
            </span>
            <span className="fileDefault">
              {language.clickToSelectAFileToImport}
            </span>
          </span>
        </label>
      </p>
      <p>
        <button className="button" onClick={readJson}>
          {language.import}
        </button>
      </p>
      {status && (
        <p>
          <span className={styles.settingsOptionsFeedback}>{status}</span>
        </p>
      )}
      <img src="/assets/rule-confetti-brown.svg" alt="Rule Confetti Brow" />
      <h2>
        {language.removeContent} ({language.daaanger})
      </h2>
      <p>
        {reseted.tasks && <>{language.tasksReseted}</>}
        {!reseted.tasks && (
          <button
            className="button buttonDanger"
            onClick={() => {
              setReseted({ ...reseted, tasks: true });
              localStorage.removeItem("tasks");
            }}
          >
            {language.resetMyTasks}
          </button>
        )}
      </p>
      <p>
        {reseted.bugs && <>{language.bugsReseted}</>}
        {!reseted.bugs && (
          <button
            className="button buttonDanger"
            onClick={() => {
              setReseted({ ...reseted, bugs: true });
              localStorage.removeItem("bugs");
            }}
          >
            {language.uncheckBugs}
          </button>
        )}
      </p>
      <p>
        {reseted.fishes && <>{language.fishesReseted}</>}
        {!reseted.fishes && (
          <button
            className="button buttonDanger"
            onClick={() => {
              setReseted({ ...reseted, fishes: true });
              localStorage.removeItem("fishes");
            }}
          >
            {language.uncheckFishes}
          </button>
        )}
      </p>
      <p>
        {reseted.fossils && <>{language.fossilsReseted}</>}
        {!reseted.fossils && (
          <button
            className="button buttonDanger"
            onClick={() => {
              setReseted({ ...reseted, fossils: true });
              localStorage.removeItem("fossils");
            }}
          >
            {language.uncheckFossils}
          </button>
        )}
      </p>
      <p>
        <button
          className="button buttonDanger"
          onClick={() => {
            setReseted({
              tasks: true,
              bugs: true,
              fishes: true,
              fossils: true,
            });
            localStorage.clear();
          }}
        >
          {language.cleanAll}
        </button>
      </p>
      <img src="/assets/rule-confetti-brown.svg" alt="Rule Confetti Brow" />
      <h2>{language.creditsTitle}</h2>
      <p>
        {language.creditsBody} <a href="https://twitter.com/_luisf02">Chico</a>,{" "}
        <a href="https://instagr.am/fotografolixo">Dio</a>,{" "}
        <a href="https://twitter.com/vavomr">Gus</a> &{" "}
        <a href="https://twitter.com/filipekiss">Kiss</a>
      </p>
      <p>
        {language.twitterBody}{" "}
        <a href="https://twitter.com/NookWorldApp">@NookWorldApp</a>
      </p>
    </nav>
  );
}

export default SettingsOptions;
