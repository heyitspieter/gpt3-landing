import NavbarMenu from "components/Navbar/NavbarMenu/NavbarMenu";
import NavbarLinks from "components/Navbar/NavbarLinks/NavbarLinks";
import NavbarAuthBtns from "components/Navbar/NavbarAuthBtns/NavbarAuthBtns";

/* Component Assets */
import logo from "assets/logo.svg";
import styles from "components/Navbar/Navbar.module.scss";
/* Component Assets */

const Navbar = () => {
  return (
    <nav role="navigation" className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <NavbarLinks />
      </div>
      <NavbarAuthBtns />
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
