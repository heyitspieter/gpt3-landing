import React from "react";
import { useState } from "react";
import classNames from "classnames";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import NavbarLinks from "components/Navbar/NavbarLinks/NavbarLinks";
import NavbarAuthBtns from "components/Navbar/NavbarAuthBtns/NavbarAuthBtns";

/* Component Assets */
import styles from "components/Navbar/NavbarMenu/NavbarMenu.module.scss";
/* Component Assets */

const NavbarMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            color="#ffffff"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={27}
            color="#ffffff"
            onClick={() => setToggleMenu(true)}
          />
        )}
      </button>
      {toggleMenu && (
        <div
          className={classNames({
            [styles.wrapper]: true,
            "scale-up-center": true,
          })}
        >
          <NavbarLinks style={styles.links} />
          <NavbarAuthBtns style={styles.authBtns} />
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
