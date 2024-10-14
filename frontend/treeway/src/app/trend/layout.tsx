import KakaoMapPolygon from "../common/KakaoMap/KakaoMapPolygon";
import SideList from "../common/Side/SideList";
import SmallSortList from "../main/components/SmallSortList";

export default function TrendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <SideList items={<SmallSortList />} />
      <KakaoMapPolygon />
    </>
  );
}
