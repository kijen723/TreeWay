import styles from './KeyWordNews.module.scss';

export default function KeyWordNews({location} : {location : string}){
    return(
        <div className={styles.KeyWordNews}>
            <div className={styles.KeyWord}>
                <span>{location} 인기 키워드 TOP10</span>
                {/* <KeyWordChart/> */}
            </div>
            <div className={styles.News}>
                <span>{location} 뉴스</span>
            </div>
        </div>
    )
}