import styles from '@/app/mypage/page.module.scss';
import ContentManage from './ContentManage';
import NameField from './NameField';
import ProfileImg from './ProfileImg';

interface StatusBarProps {
    setConType: (type: string) => void;
    handleModalOpen: () => void;
}

export default function StatusBar({ setConType, handleModalOpen }: StatusBarProps) {
    return (
        <div className={styles.block}>
            <ProfileImg />
            <NameField handleModalOpen={handleModalOpen} />
            <ContentManage setConType={setConType} />
        </div>
    );
}
