import styles from './blogPage.module.css';
import CardList from '@/app/components/cardList/CardList';
import Menu from '@/app/components/Menu/Menu';

const BlogPage = ({searchParams}) => {
    const page = parseInt(searchParams.page) || 1;
    const {cat} = searchParams;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <div className={styles.content}></div>
            <CardList page={page} cat={cat}/>
            <Menu/>
        </div>
    )
}

export default BlogPage;