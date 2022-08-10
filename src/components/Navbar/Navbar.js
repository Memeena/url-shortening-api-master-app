import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.svg";

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  function updateWidth() {
    const width = window.innerWidth;
    console.log(width);
    setWidth(width);
  }

  React.useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  console.log(window.innerWidth);
  function toggleMenu() {
    setDisplayMenu((prev) => !prev);
    console.log(displayMenu);
  }

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Logo" />

      {width < 600 && <div className={styles.menu} onClick={toggleMenu}></div>}

      {(width > 600 || displayMenu) && (
        <nav>
          <ul className={width < 600 ? styles.navListMobile : styles.navList}>
            <li className={styles.navItem}>
              <a className={styles.navLink}>Features</a>
            </li>

            <li>
              <a className={styles.navLink}>Pricing</a>
            </li>

            <li>
              <a className={styles.navLink}>Resources</a>
            </li>

            {width < 600 && <div className={styles.line}></div>}
            <li>
              <a className={`${styles.navLink} ${width < 600 && styles.login}`}>
                Login
              </a>
            </li>

            <li>
              <a className={styles.signUp}>Sign Up</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
