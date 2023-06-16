import React, {useContext} from "react";
import "../App.css";
import { ThemeContext } from "./ThemeContext";

function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="NavBar" style={{ backgroundColor: theme.backgroundColor }}>
      <nav>
        <ul>
          <li>
            <a className="active" href="#home" style={{color: theme.color}}>
              Home
            </a>
          </li>
          <li>
            <a href="#news" style={{color: theme.color}}>News</a>
          </li>
          <li>
            <a href="#about" style={{color: theme.color}}>About</a>
          </li>
          <li>
            <a href="#contact" style={{color: theme.color}}>Contact</a>
          </li>
        </ul>
        <div style={{ position: "relative" }}>
                {" "}
          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
              textDecoration: 'none'
            }}
            data-testid="toggle-theme-btn"
          >
                  Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
