'use client'

import SideList from '@/app/common/Side/SideList';
import Comments from './component/comment/Comments';
import PostDetail from './component/detail/PostDetail';
import PostSummary from './component/title/PostSummary'
import styles from './page.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import SmallSortList from '@/app/main/components/SmallSortList';

export default function CommunityDetail() {
    const sideState = useSelector((state: RootState) => state.sidecontrol);

    return (
        <div className={styles.background}>
            <div className={styles.contentsArea}>
                <div>
                    <SideList items={<SmallSortList />}/>
                </div>
                <div>
                    <PostSummary />
                    <Comments />
                </div>
                <div>
                    <PostDetail />
                </div>
            </div>
        </div>
    );
}