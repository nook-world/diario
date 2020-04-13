import React, { useState, useEffect } from "react";

import bugs from "@nook-world/data/bugs";
import fishes from "@nook-world/data/fishes";
import fossils from "@nook-world/data/fossils";

import MuseumHeader from "./MuseumHeader";
import MuseumSearch from "./MuseumSearch";
import MuseumToClipboard from "./MuseumToClipboard";

import styles from "../styles/components/MuseumList.module.css";

function MuseumList({ language, type }) {
  const [keyword, setKeyword] = useState("");
  const [selectedMuseumItem, setSelectedMuseumItem] = useState({
    bugs: [],
    fishes: [],
    fossils: [],
  });
  const museumItems = {
    bugs,
    fishes,
    fossils: fossils.filter((fossil) => fossil.show),
  };

  useEffect(() => {
    let storage = [];
    try {
      storage = localStorage.getItem(type);
      storage = JSON.parse(storage) || [];
    } catch (error) {
      storage = [];
    }
    const state = { ...selectedMuseumItem };
    state[type] = storage;
    setSelectedMuseumItem(state);
  }, []);

  function selectMuseumItem(id) {
    let state = { ...selectedMuseumItem };

    if (state[type].includes(id)) {
      state[type] = state[type].filter((item) => item !== id);
    } else {
      state[type].push(id);
    }

    localStorage.setItem(type, JSON.stringify(state[type]));

    setSelectedMuseumItem(state);
  }

  return (
    <div className={styles.museumList}>
      <MuseumHeader
        language={language}
        type={type}
        currentItems={selectedMuseumItem[type].length}
        totalItems={museumItems[type].length}
      />
      <MuseumSearch
        language={language}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      {museumItems[type]
        .filter((museumItem) =>
          museumItem.name.toLowerCase().includes(keyword.toLowerCase().trim())
        )
        .map((museumItem) => {
          const isSelected = selectedMuseumItem[type].includes(museumItem.id);
          const labelClasses = [styles.museumListLabel];
          if (isSelected) labelClasses.push(styles.museumListLabelActive);
          let imageUrl = `/${type}/compressed/${museumItem.id}.png`;
          let imageAlt = museumItem.name;

          if (type === "fossils") {
            imageUrl = "/items/77.png";
            imageAlt = "Fossil";
          }

          return (
            <div
              key={`${type}-${museumItem.id}`}
              className={styles.museumListItem}
            >
              <label className={labelClasses.join(" ")}>
                <input
                  type="checkbox"
                  className={[styles.museumListCheckbox, "checkbox"].join(" ")}
                  checked={isSelected}
                  onChange={() => selectMuseumItem(museumItem.id)}
                />
                <img
                  className={styles.museumListImage}
                  src={imageUrl}
                  alt={imageAlt}
                  loading="lazy"
                  width="64"
                  height="64"
                />
              </label>
              {museumItem?.name}
            </div>
          );
        })}
      <MuseumToClipboard
        language={language}
        type={type}
        selected={selectedMuseumItem[type]}
        list={museumItems[type]}
      />
    </div>
  );
}

export default MuseumList;
