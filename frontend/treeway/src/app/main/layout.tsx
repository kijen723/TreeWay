import KakaoMap from '../common/KakaoMap/KakaoMap';
import SideDetail from '../common/Side/SideDetail';
import SearchBtn from './components/SearchBtn';
import SideDetailItems from './components/SideDetailItems';
// import SideDetailBox from './components/SideDetailBox';

export default function MainLayout({
<<<<<<< HEAD
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <KakaoMap></KakaoMap>
      <SideDetail items={<SideDetailItems />} />
      <SearchBtn />
      {children}
    </>
  );
}
=======
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
            <KakaoMap></KakaoMap>
            <SideDetail items={<SideDetailItems/>} />
            {children}
        </>
    )
}
>>>>>>> 77c8547 (feat : modify promotion page)
