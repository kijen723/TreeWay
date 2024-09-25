import SideDetail from "@/app/common/Side/SideDetail";
import SideDetailItems from "../components/SideDetailItems";
import DetailBox from "../components/DetailBox";

export default function ItemDetail(){
    return(
        <>
            <SideDetail sideState={true} items={<SideDetailItems />}/>
            <DetailBox></DetailBox>
        </>
    )
}