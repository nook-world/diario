import React from "react";

import { useAppContext } from "../hooks/appContext";

import styles from "../styles/components/DisplayOptions.module.css";

function DisplayOptions({ language }) {
  const { menuItems, setMenuItems } = useAppContext();

  function updateMenu(item) {
    const state = [...menuItems];
    state[item].visible = !state[item].visible;
    setMenuItems(state);
  }

  return (
    <>
      <h2>{language.display}</h2>
      <p>{language.chooseWhatYouWantToSeeInTheMenu}:</p>
      {menuItems.map((menuItem, index) => {
        const withoutConfig = ["", "settings"];

        if (withoutConfig.includes(menuItem.rootPath)) {
          return null;
        }

        return (
          <p
            key={`setting-option-menu-${menuItem.rootPath}`}
            className={styles.displayOptionsMenu}
          >
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={menuItem.visible}
                onChange={() => updateMenu(index)}
              />
              {language[menuItem.label]}
            </label>
          </p>
        );
      })}
    </>
  );
}

export default DisplayOptions;
