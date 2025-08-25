import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ post, key }) => {
  const d = new Date(post.createdAt);
  const date = d.toDateString();

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={post?.img} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}> {date} </span>
          <span className={styles.category}> {post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`} >
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          {" "}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
