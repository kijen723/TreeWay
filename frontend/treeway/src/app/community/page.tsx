import Pagenation from './component/Pagenation';
import PostList from './component/PostList';
import UpperNav from './component/UpperNav';
import styles from './page.module.scss';

export default function Community() {
    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.postBlock}>
                    <UpperNav />
                    <PostList />
                </div>
                <div>
                    <Pagenation />
                </div>
            </div>
        </div>
    );
}