/**Component Assets */
import styles from "components/Article/Article.module.scss";
/**Component Assets */

const Article = ({ title, date, imgUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className={styles.content}>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
