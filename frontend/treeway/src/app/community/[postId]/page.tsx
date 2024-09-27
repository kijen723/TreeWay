'use client'

import SideList from '@/app/common/Side/SideList';
import Comments from './component/comment/Comments';
import PostDetail from './component/detail/PostDetail';
import PostSummary from './component/title/PostSummary'
import styles from './page.module.scss'
import SmallSortList from '@/app/main/components/SmallSortList';
import { useState } from 'react';
import WideComments from './component/comment/wideComment/WideComments';
import NarrowPostSummary from './component/title/narrowPostSummary/NarrowPostSummary';

export default function CommunityDetail() {
    const [ defView, setDefView ] = useState(true);

    const toggleDefView = () => {
        setDefView(!defView);
    }

    return (
        <div className={styles.background}>
            <div className={styles.contentsArea}>
                <div>
                    <SideList items={<SmallSortList />}/>
                </div>
                <div>
                    { defView ? (
                        <>
                            <PostSummary />
                            <Comments onClick={toggleDefView}/>
                        </>
                        ) : 
                    (
                        <>
                            <NarrowPostSummary onClick={toggleDefView}/>
                            <WideComments />
                        </>
                    )}
                </div>
                <div>
                    <PostDetail />
                </div>
            </div>
        </div>
    );
}