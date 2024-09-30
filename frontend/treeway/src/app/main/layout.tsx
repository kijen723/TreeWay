import KakaoMap from "../common/KakaoMap/KakaoMap";
import SideDetail from "../common/Side/SideDetail";
import SearchBtn from "./components/SearchBtn";
import SideDetailItems from "./components/SideDetailItems";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
            <KakaoMap></KakaoMap>
            <SideDetail items={<SideDetailItems/>} />
            <SearchBtn/>
            {children}
        </>
    )
}