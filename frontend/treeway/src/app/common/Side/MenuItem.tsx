import styles from './SideList.module.scss'

interface MenuItemProps {
    icon: JSX.Element;
    label: string;
}

export default function MenuItem({ icon, label } : MenuItemProps) {
    return (
        <div className={styles.menuItem}>
            <div className={styles.icon}>{icon}</div>
            <span className={styles.label}>{label}</span>
        </div>
    );
}