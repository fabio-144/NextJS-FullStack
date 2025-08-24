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
  console.log("Fetching posts for page:", page, "and category:", cat);

  const { posts, count } = await getData(page, cat);
  console.log("Received posts: ", posts, count);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page + 1) + POST_PER_PAGE < count;
  console.log("Pagination - hasPrev:", hasPrev, "hasNext:", hasNext);

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
