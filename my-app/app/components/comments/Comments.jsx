import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Tales Victorino</span>
              <span className={styles.date}>19.08.2025</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur explicabo odit saepe suscipit ipsa, voluptas temporibus optio quod praesentium! Pariatur eum commodi non tempore sed ut saepe perferendis optio mollitia.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Tales Victorino</span>
              <span className={styles.date}>19.08.2025</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur explicabo odit saepe suscipit ipsa, voluptas temporibus optio quod praesentium! Pariatur eum commodi non tempore sed ut saepe perferendis optio mollitia.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Tales Victorino</span>
              <span className={styles.date}>19.08.2025</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur explicabo odit saepe suscipit ipsa, voluptas temporibus optio quod praesentium! Pariatur eum commodi non tempore sed ut saepe perferendis optio mollitia.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Tales Victorino</span>
              <span className={styles.date}>19.08.2025</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur explicabo odit saepe suscipit ipsa, voluptas temporibus optio quod praesentium! Pariatur eum commodi non tempore sed ut saepe perferendis optio mollitia.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Tales Victorino</span>
              <span className={styles.date}>19.08.2025</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur explicabo odit saepe suscipit ipsa, voluptas temporibus optio quod praesentium! Pariatur eum commodi non tempore sed ut saepe perferendis optio mollitia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
