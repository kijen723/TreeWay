import HeaderNav from "../common/Header/HeaderNav";
import KakaoMap from "../common/KakaoMap/KakaoMap";
import KakaoMapPolygon from "../common/KakaoMap/KakaoMapPolygon";
import SideDetail from "../common/Side/SideDetail";
import SideList from "../common/Side/SideList";
import SideNav from "../common/Side/SideNav";
import Side from "./components/Side";
import styles from "./page.module.scss";

export default function Main(){
    return(
        <div className={styles.main}>
            <KakaoMap></KakaoMap>
            <HeaderNav></HeaderNav>
            <SideNav></SideNav>
            <Side></Side>
        </div>
    )
}