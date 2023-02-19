import classNames from "classnames";
import Article from "components/Article/Article";

/**Component Assets */
import blog01 from "assets/blog01.png";
import blog02 from "assets/blog02.png";
import blog03 from "assets/blog03.png";
import blog04 from "assets/blog04.png";
import blog05 from "assets/blog05.png";
import styles from "components/Blog/Blog.module.scss";
import Gradient from "components/UI/Gradient/Gradient.module.scss";
/**Component Assets */

const Blog = () => {
  return (
    <div
      id="blog"
      className={classNames({
        [styles.container]: true,
        section__padding: true,
      })}
    >
      <div className={styles.heading}>
        <h1 className={Gradient.text}>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__group}>
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className={styles.wrapper__group}>
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
