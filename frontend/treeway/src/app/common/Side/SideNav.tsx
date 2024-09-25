import styles from './SideNav.module.scss'
import { GoBell } from 'react-icons/go';
import { MdLogout, MdOutlineSettings } from 'react-icons/md';
import RoundBtnGroup from '../RoundBtnGroup';

export default function SideNav() {
    const upperButtons = [
        { icon: GoBell, alt: 'Alarm Button', },
        { icon: GoBell, alt: 'Alarm Button', },
        { icon: GoBell, alt: 'Alarm Button', },
        { icon: GoBell, alt: 'Alarm Button', },
    ];

    const lowerButtons = [
        { icon: MdOutlineSettings, alt: 'Alarm Button', },
        { icon: MdLogout, alt: 'Alarm Button', },
    ];

    return (
        <nav className={styles.navbar}>
            <RoundBtnGroup buttons={upperButtons} direction="column"/>
            <RoundBtnGroup buttons={lowerButtons} direction="column"/>
        </nav>
    );
}