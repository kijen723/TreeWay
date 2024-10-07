import Button from '@/app/common/Button';
import styles from '../page.module.scss'
import SearchBtn from './SearchBtn';
import SortBox from './SortBox';
import { useRouter } from 'next/navigation';

interface UpperNavProps {
    setSortBy: (value: 'Latest' | 'ViewCount' | 'ScrapCount') => void; 
}

export default function UpperNav({ setSortBy }: UpperNavProps) {
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
                <SortBox setSortBy={setSortBy} />
                <SearchBtn />
            </div>
        </div>
    );
}
