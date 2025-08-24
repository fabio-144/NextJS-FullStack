import Menu from "../components/Menu/Menu";
import Comments from "../components/comments/Comments";
import styles from "./singlePage.module.css";
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch Posts");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {" "}
            <p>{data.title}</p>
          </h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                {/* <Image src="/p1.jpeg" alt="" fill className={styles.avatar} /> */}
                <Image
                  src={data.user.image}
                  alt=""
                  width={32}
                  height={32}
                  className={styles.avatar}
                />
              </div>
            )}

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data.user.name}</span>
              <span className={styles.date}>{data.createdAt}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default SinglePage;
