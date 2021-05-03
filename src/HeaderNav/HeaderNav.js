/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useHistory } from "react-router-dom";
import "./header-nav.scss";
import HeaderNavIcon from "./HeaderNavIcon";
import HeaderNavImage from "./HeaderNavImage";
import HeaderNavItem from "./HeaderNavItem";

const NavData = [
  {
    id: 1,
    navHead: "Home",
    title: "your collaborators",
  },
  {
    id: 2,
    navHead: "Projects",
    title: "recent",
  },
];

const icons = [
  {
    id: "1",
    icon: "bell",
  },
  {
    id: "2",
    icon: "settings",
  },
];
function HeaderNav() {
  let history = useHistory();

  return (
    <div className="header-nav">
      <div className="header-nav__wrap">
        <div className="header-nav__logo-box" onClick={() => history.push("/")}>
          <img
            className="header-nav__logo"
            src="../img/jira-logo.png"
            alt="Jira Logo"
          />
          <h2 className="heading-secondry">Jira Software</h2>
        </div>
        <nav className="header-nav__nav">
          <ul className="header-nav__list">
            {NavData.map((navItem) => {
              return (
                <HeaderNavItem
                  key={navItem.id}
                  navHead={navItem.navHead}
                  headerMenuTitle={navItem.title}
                />
              );
            })}
          </ul>
        </nav>
        <nav className="header-nav__user-settings">
          <ul className="header-nav__list">
            {icons.map(({ icon, id }) => {
              return <HeaderNavIcon key={id} icon={icon} />;
            })}

            <HeaderNavImage src={"../img/gaben.jpg"} />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNav;
