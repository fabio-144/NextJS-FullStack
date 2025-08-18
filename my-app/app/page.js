import Image from "next/image";
import Link from "next/link";
import Featured from "./components/featured/Feature";
import CategoryList from "./components/categoryList/CategoryList";

export default function Home() {
  return (
    <div>
      <Featured/>
      <CategoryList/>
    </div>
  );
}
