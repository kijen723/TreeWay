import { trendData } from '@/types/TrendDataType';
import styles from './Restaurant5.module.scss';
import RestaurantChart from './RestaurantChart';

export default function Restaurant5({location, data} : {location : string, data: trendData}){
    return(
        <div className={styles.main}>
            <span>{location} 신규 창업 가게</span>
            <RestaurantChart trendData={data}/>
        </div>
    )
}