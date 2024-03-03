import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./pageNav.module.css";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to={"/product"}>product</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
