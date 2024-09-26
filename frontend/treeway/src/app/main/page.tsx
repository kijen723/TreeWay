import KakaoMap from "../common/KakaoMap/KakaoMap";
import SideList from "../common/Side/SideList";
import DetailBox from "./components/DetailBox";
import SmallSortList from "./components/SmallSortList";
import styles from "./page.module.scss";
import {Store} from "@/util/MakeData";

export default function Main(){
    return(
        <div className={styles.main}>
            <SideList items={<SmallSortList />} />
        </div>
    )
}