import styled from "styled-components";

const UserContainer = styled.div`
  width: 400px;
  padding: 2rem;
  background-color: #FFFFFF;
  border-radius: 1.2rem;
`;

const ContentContainer = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    padding: 1rem 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ContentText = styled.span`

`;

export {
  UserContainer,
  ContentContainer,
  ContentText,
};