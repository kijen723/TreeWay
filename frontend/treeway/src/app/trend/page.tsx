import KakaoMapPolygon from "../common/KakaoMap/KakaoMapPolygon";
import SideList from "../common/Side/SideList";
import SmallSortList from "../main/components/SmallSortList";

export default function Trend(){
    return(
        <>
            <SideList sideState={true} items={<SmallSortList />} />
            <KakaoMapPolygon/>
        </>
    )
}