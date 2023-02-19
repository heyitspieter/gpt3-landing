import classNames from "classnames";

/**Component Assets */
import image from "assets/possibility.png";
import Gradient from "components/UI/Gradient/Gradient.module.scss";
import styles from "components/Possibility/Possibility.module.scss";
/**Component Assets */

const Possibility = () => {
  return (
    <div
      id="possibility"
      className={classNames({
        [styles.container]: true,
        section__padding: true,
      })}
    >
      <div className={styles.image}>
        <img src={image} alt="woman wearing var" />
      </div>
      <div className={styles.content}>
        <h4>Request Early Access to Get Started</h4>
        <h1 className={Gradient.text}>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
