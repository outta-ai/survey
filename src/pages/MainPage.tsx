import React from 'react';

import PageWrapper from "components/PageWrapper/PageWrapper";
import Header from 'components/Header/Header';
import UserInfo from "components/UserInfo/UserInfo";

function MainPage(): JSX.Element {
  return (
    <PageWrapper>
      <Header
        title='OuttaForm'
        surveyTitle="AI 기초반" 
      />
      <UserInfo
        name="홍길동"
        department="AI 기초반"
      />
    </PageWrapper>
  );
};

export default MainPage;