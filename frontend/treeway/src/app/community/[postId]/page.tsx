'use client'

import SideList from '@/app/common/Side/SideList';
import Comments from './component/title/Comments';
import PostDetail from './component/title/PostDetail';
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
                    <SideList sideState={sideState.value} items={<SmallSortList />}/>
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