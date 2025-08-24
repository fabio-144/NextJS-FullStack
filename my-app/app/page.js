import Image from "next/image";
import Link from "next/link";
import styles from "./homePage.module.css"
import Featured from "./components/featured/Feature";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/Menu/Menu";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  console.log(` HOME - ${page}`);
  
  
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
    </div>
  );
}
