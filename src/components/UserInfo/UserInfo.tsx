import React from 'react'

import { 
  UserContainer, 
  ContentContainer, 
  ContentText,
} from "./UserInfo.styles";

interface UserProps {
  name: string;
  department: string;
}

const UserInfo: React.FC<UserProps> = ({
  name,
  department,
}) => {
  return (
    <UserContainer>
      <ContentContainer>
        <li>
          <ContentText>
            이름
          </ContentText>
          <ContentText>
            {name}
          </ContentText>
        </li>
        <li>
          <ContentText>
            부서
          </ContentText>
          <ContentText>
            {department}
          </ContentText>
        </li>
      </ContentContainer>
    </UserContainer>
  );
};

export default UserInfo;