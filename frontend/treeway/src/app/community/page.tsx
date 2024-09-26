'use client'

import { useSelector } from 'react-redux';
import Pagenation from './component/Pagenation';
import PostList from './component/PostList';
import UpperNav from './component/UpperNav';
import styles from './page.module.scss';
import { RootState } from '@/redux/store';
import SmallSortList from '../main/components/SmallSortList';
import SideList from '../common/Side/SideList';

export default function Community() {
    const sideState = useSelector((state: RootState) => state.sidecontrol);

    return (
        <div className={styles.background}>
            <div>
                <SideList items={<SmallSortList />} />
            </div>
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