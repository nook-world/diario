import React from "react";
import { useRouter } from "next/router";

import { useAppContext } from "../hooks/appContext";
import Bugs from "./icons/Bugs";
import Fishes from "./icons/Fishes";
import Fossils from "./icons/Fossils";

import styles from "../styles/components/MuseumSwitch.module.css";

function MuseumSwitch({ language, active }) {
  const { menuItems, setMenuItems } = useAppContext();
  const router = useRouter();

  const switchItems = [
    {
      label: language.bugs,
      icon: <Bugs />,
      type: "bugs",
      path: "/museum/bugs",
    },
    {
      label: language.fishes,
      icon: <Fishes />,
      type: "fishes",
      path: "/museum/fishes",
    },
    {
      label: language.fossils,
      icon: <Fossils />,
      type: "fossils",
      path: "/museum/fossils",
    },
  ];

  function saveMuseumPosition(e, href) {
    e.preventDefault();

    router.push(href);

    const state = [...menuItems];

    state.map((item) => {
      if (item.rootPath === "museum") {
        item.path = href;
      }
    });

    setMenuItems(state);
  }

  return (
    <div className={styles.museumSwitch}>
      {switchItems.map((switchItem) => {
        const classes = [styles.museumSwitchButton];
        if (active === switchItem.type)
          classes.push(styles.museumSwitchButtonActive);

        return (
          <a
            key={`museum-switch-${switchItem.type}`}
            href={switchItem.path}
            className={classes.join(" ")}
            onClick={(e) => saveMuseumPosition(e, switchItem.path)}
          >
            {switchItem.icon}
            {switchItem.label}
          </a>
        );
      })}
    </div>
  );
}

export default MuseumSwitch;
