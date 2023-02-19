import React from "react";
import classNames from "classnames";

/* Component Assets */
import styles from "components/Navbar/NavbarAuthBtns/NavbarAuthBtns.module.scss";
/* Component Assets */

const NavbarAuthBtns = ({ style }) => {
  return (
    <div className={classNames({ [styles.container]: true, [style]: true })}>
      <button className={styles.btn_1}>Sign in</button>
      <button className={styles.btn_2}>Sign up</button>
    </div>
  );
};

export default NavbarAuthBtns;
