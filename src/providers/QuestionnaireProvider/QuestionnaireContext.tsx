import {Context, createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useState} from 'react';
import * as React from 'react';
import {PersonalityEnum} from "../../mocks/questions";


type QuestionnaireProviderProps = {
  children: React.ReactNode
}
type QuestionnaireContext = {
  questionnaire: Questionnaire;
  setQuestionnaire: Dispatch<SetStateAction<Questionnaire>>
}
export type Questionnaire = {[question: string]: Question;}

export type Question = {
  label: string;
  value: PersonalityEnum;
}

const initialState = {
  questionnaire: {},
  setQuestionnaire: () => {},
} as QuestionnaireContext;

export const QuestionnaireContext = createContext(initialState);

export const useQuestionnaireContext = () => {
  const context = useContext(QuestionnaireContext);

  if (!context) {
    throw new Error(
      'useManagementRightsContext must be used within a ManagementRightsProvider'
    );
  }

  return context;
};

export const QuestionnaireProvider: React.FC<QuestionnaireProviderProps> = ({ children }) => {
  const [questionnaire, setQuestionnaire] = useState<Questionnaire>(initialState.questionnaire);
  const value = useMemo(
      (): QuestionnaireContext  => ({ questionnaire, setQuestionnaire }),
      [questionnaire]
  );
  return (
      // @ts-ignore
      <QuestionnaireContext.Provider value={value}>
      {children}
    </QuestionnaireContext.Provider>
  );
};
