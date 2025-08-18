import Image from "next/image";
import Link from "next/link";
import styles from "./homePage.module.css"
import Featured from "./components/featured/Feature";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/Menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
