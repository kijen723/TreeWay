import styles from '@/app/mypage/page.module.scss';
import ContentManage from './ContentManage';
import NameField from './NameField';
import ProfileImg from './ProfileImg';

export default function StatusBar() {
    return (
        <div className={styles.block}>
            <ProfileImg />
            <NameField />
            <ContentManage />
        </div>
    );
} 