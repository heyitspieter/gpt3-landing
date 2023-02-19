import classNames from "classnames";

/* Component Assets */
import slack from "assets/slack.png";
import google from "assets/google.png";
import shopify from "assets/shopify.png";
import dropbox from "assets/dropbox.png";
import atlassian from "assets/atlassian.png";
import styles from "components/Brand/Brand.module.scss";

/* Component Assets */

const Brand = () => {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        section__padding: true,
      })}
    >
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
