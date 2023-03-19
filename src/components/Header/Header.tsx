import React from 'react';
import { HeaderContainer, HeaderText, } from './Header.styles';

interface HeaderProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  backgroundColor = '#333',
  textColor = '#fff',
}) => {
  return (
    <HeaderContainer>
      <HeaderText>
        {title}
      </HeaderText>
    </HeaderContainer>
  );
};

export default Header;