'use client'

import { useEffect, useState } from "react";
import {Map} from "react-kakao-maps-sdk";
import styles from "./KakaoMap.module.scss";
import { LatLng } from "@/types/MapType";

export default function KakaoMap(){

    const [scriptLoad, setScriptLoad] = useState<boolean>(false);
    const [nowPosition, setNowPosition] = useState<LatLng>({lat : 36.628297, lng : 127.492533});

    useEffect(() => {
        if (!document.querySelector(`script[src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false"]`)) {
            const script: HTMLScriptElement = document.createElement("script");
            script.async = true;
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
            document.head.appendChild(script);
            script.addEventListener("load", () => {
              setScriptLoad(true);
            });
        
            if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition((position)=>{
                setNowPosition({lat : position.coords.latitude, lng : position.coords.longitude});
              })
            }
        }
      }, []);
    return (
        <div className={styles.map}>
            {scriptLoad ? (
                <Map
                    center={{lat : nowPosition.lat, lng : nowPosition.lng}}
                    style = {{ width : "100%", height : "100%"}}
                    level={4}
                ></Map>
            ) : <div></div>}
        
        </div>
    )
}