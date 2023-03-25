import React from 'react'
import Link from "next/link";
import { 
  ListContainer,
  CardContainer,
  SurveyTitle,
  SurveyContent, 
} from "./SurveyList.styles";


interface Survey {
  id: number;
  title: string;
  body: string;
};

interface SurveyListProps {
  surveys: Survey[];
}

const SurveyList: React.FC<SurveyListProps> = ({ surveys })=> {
  
  return (
    <ListContainer>
      {surveys.map((survey) => (
        <CardContainer
          key={survey.id}
        >
          <Link href={`/surveys/${survey.id}`}>
            <SurveyTitle>
              {survey.title}
            </SurveyTitle>
            <SurveyContent>
              {survey.body}
            </SurveyContent>
          </Link>
        </CardContainer>
      ))}      
    </ListContainer>
  );
};

export default SurveyList;