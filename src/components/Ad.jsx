import React from "react";
import { useState,useEffect } from "react";
import styled from "styled-components";

const Adimg = styled.img`
    max-width: 100%;     /* 최대 너비를 컨테이너의 100%로 설정 */
    height: auto;         /* 높이를 자동으로 설정하여 비율 유지 */
    display: block;       /* 이미지를 블록 레벨 요소로 설정 */
    object-fit: contain;  /* 이미지가 컨테이너에 맞춰지도록 설정 */
`; //첫 글자 대문자로 해야됨 
export default function Ad(props){
    // useState 훅을 사용하여 isVisible 상태를 생성하고 초기 값을 props의 값으로 설정
  const [isVisible, setIsVisible] = useState(props.isVisible);

  // props가 변경될 때마다 isVisible 상태를 업데이트
  useEffect(() => {
    setIsVisible(props.isVisible);
  }, [props.isVisible]);

    return(
        isVisible ? <Adimg src="/UMCad.png" alt="광고" /> : null
    );
}


/*리액트는 src 폴더 내에 있는 파일을 모듈로 처리함 근데 public에서는 안그럼..
     src폴더 내의 이미지 파일 경로를 지정하려면 다른 모듈들 처럼 import문을 써야함
    import imageSrc from './path/to/image.png';

    function Component() {
    return <img src={imageSrc} alt="Description" />;
}
*/