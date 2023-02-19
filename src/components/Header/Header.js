import classNames from "classnames";

/* Component Assets */
import ai from "assets/ai.png";
import people from "assets/people.png";
import styles from "components/Header/Header.module.scss";
import Gradient from "components/UI/Gradient/Gradient.module.scss";

/* Component Assets */

const Header = () => {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        section__padding: true,
      })}
      id="home"
    >
      <div className={styles.wrapper}>
        <h1 className={Gradient.text}>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={styles.input_container}>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className={styles.users}>
          <img src={people} alt="Users" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.image}>
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
