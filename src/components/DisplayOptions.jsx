import React from "react";

export function DisplayOptions({ menuItems, className }) {
  return (
    <>
      {" "}
      <h2>Display settings</h2>
      <p>Choose what you want to see in the menu:</p>
      {menuItems.map((menuItem, index) => {
        const withoutConfig = ["", "settings"];

        if (withoutConfig.includes(menuItem.rootPath)) {
          return null;
        }

        return (
          <p
            key={`setting-option-menu-${menuItem.rootPath}`}
            className={className}
          >
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={menuItem.visible}
                onChange={() => updateMenu(index)}
              />
              {menuItem.label}
            </label>
          </p>
        );
      })}
    </>
  );
}
