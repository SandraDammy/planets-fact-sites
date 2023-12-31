import React from "react";
import "./styles.css";
import {ReactComponent as Hamburger} from '../assets/img/icon-hamburger.svg'

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="brand-name">
        <a href="/">THE PLANETS</a>
      </div>

      <div className="hamburger">
        <Hamburger/>
      </div>

      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/mercury" className="nav-active">mercury</a>
          </li>
          <li>
            <a href="/venus">venus</a>
          </li>
          <li>
            <a href="/earth">earth</a>
          </li>
          <li>
            <a href="/mars">mars</a>
          </li>
          <li>
            <a href="/jupiter">jupiter</a>
          </li>
          <li>
            <a href="/saturn">saturn</a>
          </li>
          <li>
            <a href="/uranus">uranus</a>
          </li>
          <li>
            <a href="/neptune">neptune</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
