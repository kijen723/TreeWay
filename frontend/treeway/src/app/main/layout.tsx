import KakaoMap from '../common/KakaoMap/KakaoMap';
import SideDetail from '../common/Side/SideDetail';
import SideDetailItems from './components/SideDetailItems';
// import SideDetailBox from './components/SideDetailBox';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <KakaoMap></KakaoMap>
      <SideDetail items={<SideDetailItems />} />
      {children}
    </>
  );
}
