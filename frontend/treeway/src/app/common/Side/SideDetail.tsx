import styles from './SideDetail.module.scss';

export default function SideDetail({sideState, items} : {sideState : boolean, items : JSX.Element}){
    return(
        <nav className={styles.navbar} style={!sideState ? {height : "7vh"} : {}}>
            <span className={styles.title}>올라온 매물</span>
            {sideState ? items : <></>}
        </nav>
    )
}