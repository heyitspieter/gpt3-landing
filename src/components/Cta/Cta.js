import React from "react";

/**Component Assets */
import styles from "components/Cta/Cta.module.scss";
/**Component Assets */

const Cta = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className={styles.btn}>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
