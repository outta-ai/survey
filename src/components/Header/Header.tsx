import React from 'react';

import { IoArrowBack, IoPersonCircle } from "react-icons/io5";

import { 
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderText, 
} from './Header.styles';

interface HeaderProps {
  title: string;
  surveyTitle: string;
  backgroundColor?: string;
  textColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  surveyTitle = 'AI 기초반',
  backgroundColor = '#333',
  textColor = '#fff',
}) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <IoArrowBack size="26"/>
        <HeaderText>
          {title}
        </HeaderText>
        <HeaderText>
          ::
        </HeaderText>
        <HeaderText>
          {surveyTitle}
        </HeaderText>
      </HeaderLeft>
      <HeaderRight>
        <IoPersonCircle size="32"/>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;