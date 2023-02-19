import classNames from "classnames";

/* Component Assets */
import styles from "components/Navbar/NavbarLinks/NavbarLinks.module.scss";
/* Component Assets */

const NavbarLinks = ({ style }) => {
  return (
    <ul className={classNames({ [styles.container]: true, [style]: true })}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#wgpt3">What is GPT?</a>
      </li>
      <li>
        <a href="#possibility">Open Ai</a>
      </li>
      <li>
        <a href="#features">Case Studies</a>
      </li>
      <li>
        <a href="#blog">Library</a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
