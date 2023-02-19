import React from "react";

import styles from "components/UI/Gradient/Gradient.module.scss";

const Gradient = ({ children }) => {
  return <div className={styles.bg}>{children}</div>;
};

export default Gradient;
