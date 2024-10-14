import MenuItem from "@/app/common/Side/MenuItem";
import { FcComboChart, FcDepartment, FcHome, FcRadarPlot, FcStatistics, FcTodoList } from "react-icons/fc";

export default function SmallSortList(){
    return(
        <>
            <MenuItem icon={<FcHome/>} label="메인" index={0}></MenuItem>
            <MenuItem icon={<FcComboChart/>} label="종합 추천" index= {1}></MenuItem>
            <MenuItem icon={<FcDepartment/>} label="업종 추천" index= {2}></MenuItem>
            <MenuItem icon={<FcRadarPlot/>} label="지역 추천" index= {3}></MenuItem>
            <MenuItem icon={<FcStatistics/>} label="트렌드 조회" index= {4}></MenuItem>
            <MenuItem icon={<FcTodoList/>} label="분석 이력 조회" index= {5}></MenuItem>
        </>
    )
}