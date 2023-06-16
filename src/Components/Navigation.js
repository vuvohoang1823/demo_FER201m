import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Icon} from 'react-materialize';
import "../App.css";
import { ThemeContext } from "./ThemeContext";

function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
      <Navbar className="menu"
        alignLinks="right"
        brand={<span className="brand-logo">Player Cards</span>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
      >
            <li>
                <Link to='/'><Icon left>home</Icon>Home</Link>
            </li>
            <li to='/news'>
              <a href="#news"><Icon left>info_outline</Icon>News</a>
            </li>
            <li to='/about'>
              <a href="/about"><Icon left>dvr</Icon>About</a>
            </li>
            <li to='/contact'>
              <a href="/contact"><Icon left>contacts</Icon>Contact</a>
            </li>
      </Navbar>
  );
}

export default Navigation;
