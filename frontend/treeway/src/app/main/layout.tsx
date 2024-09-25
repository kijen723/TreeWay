import KakaoMap from "../common/KakaoMap/KakaoMap";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
            <KakaoMap></KakaoMap>
            {children}
        </>
    )
}