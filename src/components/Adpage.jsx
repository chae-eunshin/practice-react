import React,{useState} from "react";
import Ad from './Ad';

export default function Adpage() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div>
            <Ad isVisible = {isVisible}/>
            <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? '광고 숨기기' : '광고 보이기'}</button>
        </div>
    );
  }