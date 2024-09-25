import KakaoMap from "../common/KakaoMap/KakaoMap";
import Side from "./components/Side";
import styles from "./page.module.scss";

export default function Main(){
    return(
        <div className={styles.main}>
            <Side></Side>
        </div>
    )
}