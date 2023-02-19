import classNames from "classnames";
import Feature from "components/Feature/Feature";

/* Component Assets */
import styles from "components/WhatGpt3/WhatGpt3.module.scss";
import Gradient from "components/UI/Gradient/Gradient.module.scss";
/* Component Assets */

const WhatGpt3 = () => {
  return (
    <div
      id="wgpt3"
      className={classNames({
        [styles.container]: true,
        section__margin: true,
      })}
    >
      <div className={styles.feature}>
        <Feature
          title="What is GPT-3"
          description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className={styles.heading}>
        <h1 className={Gradient.text}>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className={styles.features}>
        <Feature
          title="Chatbots"
          description="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
        <Feature
          title="Education"
          description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
      </div>
    </div>
  );
};

export default WhatGpt3;
