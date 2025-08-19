import styles from './blogPage.module.css';
import CardList from '@/app/components/cardList/CardList';
import Menu from '@/app/components/Menu/Menu';
const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <div className={styles.content}></div>
            <CardList/>
            <Menu/>
        </div>
    )
}

export default BlogPage;