'use client'

import Pagenation from './component/Pagenation';
import PostList from './component/PostList';
import UpperNav from './component/UpperNav';
import styles from './page.module.scss';
import SmallSortList from '../main/components/SmallSortList';
import SideList from '../common/Side/SideList';

export default function Community() {
    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.postBlock}>
                    <UpperNav />
                    <PostList />
                </div>
                <div>
                    <Pagenation postCnt={4} />
                </div>
            </div>
        </div>
    );
}