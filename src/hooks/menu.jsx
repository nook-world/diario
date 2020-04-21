import { useState, useEffect } from "react";

import Daily from "../components/icons/Daily";
import Museum from "../components/icons/Museum";
import Song from "../components/icons/Song";
import Case from "../components/icons/Case";

function useMenu(language) {
  const [menuItems, setMenuItems] = useState([
    {
      label: "daily",
      Icon: Daily,
      path: "/",
      rootPath: "",
      visible: true,
    },
    {
      label: "museum",
      Icon: Museum,
      path: "/museum/bugs",
      rootPath: "museum",
      visible: true,
    },
    {
      label: "songs",
      Icon: Song,
      path: "/songs",
      rootPath: "songs",
      visible: true,
    },
    {
      label: "settings",
      Icon: Case,
      path: "/settings",
      rootPath: "settings",
      visible: true,
    },
  ]);

  useEffect(() => {
    let hiddenMenus = localStorage.getItem("hiddenMenus");
    if (hiddenMenus) {
      hiddenMenus = JSON.parse(hiddenMenus);
    } else {
      return;
    }

    const state = [...menuItems].map((menuItem) => {
      if (hiddenMenus.includes(menuItem.rootPath)) {
        menuItem.visible = false;
      }
      return menuItem;
    });

    setMenuItems(state);
  }, []);

  useEffect(() => {
    const hiddenMenus = menuItems.map((menuItem) => {
      if (!menuItem.visible) {
        return menuItem.rootPath;
      }
    });

    localStorage.setItem("hiddenMenus", JSON.stringify(hiddenMenus));
  }, [menuItems]);

  return [menuItems, setMenuItems];
}

export default useMenu;
