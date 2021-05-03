import React from "react";
import "./header-menu.scss";
import HeaderMenuItem from "./HeaderMenuItem";

const MenuData = [
  {
    id: "1",
    itemText: "Invite a teammate",
    icon: "plus",
  },
  {
    id: 2,
    itemText: "jira Clone",
    icon: "truck",
  },
];

function HeaderMenu({ children }) {
  return (
    <div className="header-menu">
      <ul className="header-menu__nav">
        <div className="header-menu__heading">{children}</div>
        {MenuData.map(({ itemText, id, icon }) => {
          return <HeaderMenuItem key={id} itemText={itemText} icon={icon} />;
        })}
      </ul>
    </div>
  );
}

export default HeaderMenu;
