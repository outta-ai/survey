import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const HeaderLeft = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
  
  const HeaderRight = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.h2`
  margin-left: 10px;
`;

export {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderText,
};