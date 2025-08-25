// import Pagination/

import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat || ""} `,
    {
      cache: "no-store",
    }
  );
  
  if (!res.ok) {
    throw new Error(`HTTP error! status:, ${res.status}`);
  }
  return res.json();
};

const CardList = async ({ page, cat }) => {
  

  const { posts, count } = await getData(page, cat);
  

  const POST_PER_PAGE = 3;

  const totalPages = Math.ceil(count / POST_PER_PAGE);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;
  
  // ...e
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>

      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
