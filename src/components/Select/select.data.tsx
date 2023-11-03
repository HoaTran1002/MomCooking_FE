import { IPropsSelectLanguage } from "./select.interface";
import VietNamFlag from "../../assets/images/Flags/VietNam_Flag.png"
import UkFlag from "../../assets/images/Flags/Englang_Flag.png"
import KoreanFlag from "../../assets/images/Flags/Korean_Flag.png"
import JapanFlag from "../../assets/images/Flags/Japan_Flag.png"
export const languages:IPropsSelectLanguage[]=[
    {name:"Tiếng Việt",img:VietNamFlag},
    {name:"Tiếng Anh",img:UkFlag},
    {name:"Tiếng Hàn",img:KoreanFlag},
    {name:"Tiếng Nhật",img:JapanFlag},
]