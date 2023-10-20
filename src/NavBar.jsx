/* import TestErrorBoundary from "./TestErrorBoundary";
import Home from "./Home" */
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import IconSvg from "./IconSvg";


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.navbar__link__container}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navbar__link}`
              : `${styles.navbar__link}`
          }
          to="/"
        >
          <IconSvg />
          Counter
        </NavLink>
      </span>
      <span className={styles.navbar__link__container}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navbar__link}`
              : `${styles.navbar__link}`
          }
          to="*"
        >
          404 Page
        </NavLink>
      </span>
      <span className={styles.navbar__link__container}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navbar__link}`
              : `${styles.navbar__link}`
          }
          to="/testError"
        >
          Error Page
        </NavLink>
      </span>
    </nav>
  );
}

export default Navbar;
