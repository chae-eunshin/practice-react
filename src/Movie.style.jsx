import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieContainer = styled.div`
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const MovieImage = styled.img`
  max-width: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const MovieTitle = styled.h4`
  margin: 0;
`;

export const MovieInfoText = styled.span`
  margin-left: 3px;
`;
