import Button from '@/app/common/Button';
import styles from '../page.module.scss'
import SearchBtn from './SearchBtn';
import SortBox from './SortBox';

import { useRouter } from 'next/navigation';

export default function UpperNav() {
    const router = useRouter();

    const handleCreatePost = () => {
        router.push('/community/createPost');
    }

    return (
        <div className={styles.upperNav}>
            <div className={styles.leftBlock}>
                <Button content="글쓰기" size="medium" colorType="yellow" onClick={handleCreatePost}/>
            </div>
            <div className={styles.rightBlock}>
                <SortBox />
                <SearchBtn />
            </div>
        </div>
    );
}