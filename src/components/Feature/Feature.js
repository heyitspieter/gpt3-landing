import React from "react";

/**Component Assets */
import styles from "components/Feature/Feature.module.scss";
/**Component Assets */

const Feature = ({ description, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
