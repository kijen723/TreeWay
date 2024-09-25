import MenuItem from "@/app/common/Side/MenuItem";
import { FaHome } from "react-icons/fa";

export default function SmallSortList(){
    return(
        <>
            <MenuItem icon={<FaHome/>} label="Main"></MenuItem>
            <MenuItem icon={<FaHome/>} label="Main"></MenuItem>
            <MenuItem icon={<FaHome/>} label="Main"></MenuItem>
            <MenuItem icon={<FaHome/>} label="Main"></MenuItem>
        </>
    )
}