import React, { useState, useEffect } from "react";

import songs from "@nook-world/data/songs";

import MuseumSearch from "../MuseumSearch";
import CurrentDate from "../CurrentDate";
import Percentage from "../Percentage";

import styles from "./Songs.module.css";

function Songs({ language }) {
  const [keyword, setKeyword] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);

  useEffect(() => {
    let storage = [];
    try {
      storage = localStorage.getItem("songs");
      storage = JSON.parse(storage) || [];
    } catch (error) {
      storage = [];
    }
    setSelectedSongs(storage);
  }, []);

  function toggleSelectedSongs(id) {
    const state = [...selectedSongs];
    if (state.includes(id)) {
      state.splice(state.indexOf(id), 1);
    } else {
      state.push(id);
    }

    localStorage.setItem("songs", JSON.stringify(state));

    setSelectedSongs(state);
  }

  return (
    <>
      <div className="textCenter">
        <CurrentDate language={language} />
        <p>
          <Percentage current={selectedSongs.length} total={songs.length} />
        </p>
      </div>
      <MuseumSearch
        language={language}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <div className={styles.songs}>
        {songs
          .filter((song) =>
            song.name.toLowerCase().includes(keyword.toLowerCase().trim())
          )
          .map((song) => {
            const classes = [styles.songsItem];

            if (selectedSongs.includes(song.id)) {
              classes.push(styles.songsItemActive);
            }

            return (
              <button
                className={classes.join(" ")}
                key={`song-${song.id}`}
                onClick={() => toggleSelectedSongs(song.id)}
              >
                <img
                  className={styles.songsItemImage}
                  src={`/songs/${song.id}.png`}
                  alt={song.name}
                  title={song.name}
                  width="140"
                  height="140"
                  loading="lazy"
                />
                <span className={styles.songsItemName}>{song.name}</span>
              </button>
            );
          })}
      </div>
    </>
  );
}

export default Songs;
