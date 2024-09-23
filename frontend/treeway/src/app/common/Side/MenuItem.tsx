import styles from './SideList.module.scss'
import { MenuItemProps } from '@/types/CommonPropsTypes';

export default function MenuItem({ icon, label } : MenuItemProps) {
    return (
        <div className={styles.menuItem}>
            <div className={styles.icon}>{icon}</div>
            <span className={styles.label}>{label}</span>
        </div>
    );
}