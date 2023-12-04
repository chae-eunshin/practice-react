import React, { useState } from "react";

export default function Login(){
    const[login,setLogin] = useState(false);

    return (
        <div style={{display:"flex",alignItems:"row",paddingLeft:"20px"}}>
            <button onClick={() => setLogin(!login)} style={{width:"100px",height:"30px",marginRight:"20px",marginTop:"13px",borderRadius:"20px"}}>{login ? '로그인' : '로그아웃'}</button>
            <p style={{color:"white"}}>{login ? '환영합니다!' : '로그인 해주세요.'}</p>
        </div>
    );
}