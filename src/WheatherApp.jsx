import { useState } from "react";
import Searchbox from "./Searchbox.jsx"
import WheatherInfo from "./WheatherInfo.jsx"

export default function WheatherApp(){
    let [info,setInfo] = useState({
        cityName: "Wonderland"
    });

    let updateInfo= (result)=>{
        setInfo(result);
        console.log(result);
    }
    return(
        <>
            <Searchbox updateInfo={updateInfo}/>
            <WheatherInfo info={info}/>
        </>
    );
}