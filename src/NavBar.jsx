import styles from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import IconSvg from "./IconSvg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.navbar_container}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navbar_link}`
              : `${styles.navbar_link}`
          }
          to="/"
        >
          <IconSvg />
          Counter Page
        </NavLink>
      </span>
      <span className={styles.navbar_container}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navbar_link}`
              : `${styles.navbar_link}`
          }
          to="*"
        >
          404 Page
        </NavLink>
      </span>
      <span className={styles.navbar_container}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.active} ${styles.navbar_link}`
              : `${styles.navbar_link}`
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
