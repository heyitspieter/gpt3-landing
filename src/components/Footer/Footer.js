import classNames from "classnames";

/**Component Assets */
import logo from "assets/logo.svg";
import styles from "components/Footer/Footer.module.scss";
import Gradient from "components/UI/Gradient/Gradient.module.scss";
/**Component Assets */

const Footer = () => {
  return (
    <footer
      className={classNames({
        [styles.container]: true,
        section__padding: true,
      })}
    >
      <div className={styles.heading}>
        <h1 className={Gradient.text}>
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className={styles.btn}>
        <button type="button">Request Early Access</button>
      </div>
      <div className={styles.links}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={styles.quick_links}>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#">Overons</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
            <li>
              <a href="#">Counters</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.quick_links}>
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.quick_links}>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <button>Crechterwoord K12 182 DK Alknjkcb</button>
            </li>
            <li>
              <a href="#">085-132567</a>
            </li>
            <li>
              <a href="#">info@payme.net</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
