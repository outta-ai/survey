import React from 'react';

import PageWrapper from "components/PageWrapper/PageWrapper";
import Header from 'components/Header/Header';
import UserInfo from "components/UserInfo/UserInfo";
import SurveyList from "components/SurveyList/SurveyList";

interface Survey {
  id: number;
  title: string;
  body: string;
};

const surveys: Survey[] = [
  {id: 1, title: "Survey 1", body: "This is survey 1."},
  {id: 2, title: "Survey 2", body: "This is survey 2."},
  {id: 3, title: "Survey 3", body: "This is survey 3."},
];

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
      <SurveyList surveys={surveys} />
    </PageWrapper>
  );
};

export default MainPage;