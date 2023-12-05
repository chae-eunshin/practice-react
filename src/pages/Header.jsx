import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import Login from "../components/Login";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color:#002545;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap; //모든 항목이 한 줄에 있지 않을 경우 다음 줄로 넘김
  margin-Left: 30px;
`;

const Item = styled.li`
    margin-right: 20px; //처음에 margin을 %로 너무 많이 줘서 글자가 세로로 되었었음
    color:white;
`;

const StyledLink = styled(Link)`
  text-decoration: none; // 링크의 밑줄을 없앱니다.
  color: white; // 링크의 텍스트 색상을 지정합니다.

  &:hover {
    text-decoration: underline; // 링크에 마우스를 올렸을 때 밑줄이 생기도록 합니다.
  }
`;

export default function Header(props) {
    return (
        <Container>
            <div style= {{display:"flex",alignItems:"center"}}> {/*이미지가 위에 붙어있어서 align-items를 사용해서 가운데로 가져옴 */}
                <StyledLink to = '/'>
                <img
                    style={{ width: "154px", height: "20px" ,marginLeft:"100px"}}
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="로고"/>    
                </StyledLink> 
            </div>
            <List>
                <ul style ={{display: "flex",   //Flexbox를 활성화하여 자식 요소들을 가로로 펼칩니다.
   listStyle: "none",//기본 목록 스타일을 제거합니다. 
  padding: "0",
  flexDirection: "row" }}>
                    <StyledLink to = '/movie'><Item>영화</Item></StyledLink>
                    <StyledLink to = '/tv'><Item>TV 프로그램</Item></StyledLink>
                    <StyledLink to = '/celebirity'><Item>인물</Item></StyledLink>
                </ul>
            </List>
          <Login/>
        </Container>
    );}