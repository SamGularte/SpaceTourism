import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

  return (
    <nav className={styles.primaryHeader}>
        <NavLink className={styles.logo} to="/">
            <img src="./Logo.svg" alt="Logo" />
        </NavLink>
        <button className={isOpen ? styles.mobileNavToggleClosed : styles.mobileNavToggle} onClick={toggleNavbar} aria-expanded={isOpen} aria-label="Toggle navigation"></button>
        <ul className={isOpen ? styles.primaryNavigationOpen : styles.primaryNavigationClosed}>
            <li>
                <NavLink className={({ isActive }) => (isActive ? styles.currentpageLink : styles.pageLink)} to="/" ><span className={styles.primaryNavigationNumber} aria-hidden="true">00</span>Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? styles.currentpageLink : styles.pageLink)} to="/destination" ><span className={styles.primaryNavigationNumber} aria-hidden="true">01</span>Destination</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? styles.currentpageLink : styles.pageLink)} to="/crew" ><span className={styles.primaryNavigationNumber} aria-hidden="true">02</span>Crew</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? styles.currentpageLink : styles.pageLink)} to="/technology" ><span className={styles.primaryNavigationNumber} aria-hidden="true">03</span>Technology</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar