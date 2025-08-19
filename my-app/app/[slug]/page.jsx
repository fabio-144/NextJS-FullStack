import Menu from "../components/Menu/Menu";
import Comments from "../components/comments/Comments";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            explicabo.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Tales Victorino</span>
              <span className={styles.date}>19.08.2025</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              inventore placeat repellendus voluptatem odit, eveniet nesciunt
              consequatur sint numquam sit praesentium nemo nihil nostrum ab
              reprehenderit quod quisquam soluta amet.
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit et
              voluptas veniam?
            </h2>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              inventore placeat repellendus voluptatem odit, eveniet nesciunt
              consequatur sint numquam sit praesentium nemo nihil nostrum ab
              reprehenderit quod quisquam soluta amet.
            </p>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              inventore placeat repellendus voluptatem odit, eveniet nesciunt
              consequatur sint numquam sit praesentium nemo nihil nostrum ab
              reprehenderit quod quisquam soluta amet.
            </p>
          </div>
          <Comments/>
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SinglePage;
