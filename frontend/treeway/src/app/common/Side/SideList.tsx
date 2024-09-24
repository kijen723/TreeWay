import MenuItem from './MenuItem';
import styles from './SideList.module.scss'
import { FaHome } from 'react-icons/fa';

export default function SideList() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.menuItems}>
                <MenuItem icon={<FaHome />} label="HOME"/>
                <MenuItem icon={<FaHome />} label="HOME"/>
                <MenuItem icon={<FaHome />} label="HOME"/>
                <MenuItem icon={<FaHome />} label="HOME"/>
                <MenuItem icon={<FaHome />} label="HOME"/>
            </div>
        </nav>
    );
}