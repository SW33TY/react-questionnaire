import React, {useEffect, useState} from 'react'
import {Questionnaire, useQuestionnaireContext} from "../../providers/QuestionnaireProvider/QuestionnaireContext";
import {CustomButtonGroup} from "../CustomButtonGroup/CustomButtonGroup";
import {PersonalityEnum, QuestionsMock} from "../../mocks/questions";
import Button from "@mui/material/Button";
import {CustomStepper} from "../Stepper/Stepper";

export const Menu: React.FC = () => {
    //TODO: add constants
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const questionsData = QuestionsMock;

    const {questionnaire, setQuestionnaire} = useQuestionnaireContext();

    useEffect(() => {
        console.log('QuestionnaireContext', Object.values(questionnaire));
    }, [questionnaire]);

    const setAnswer = (type: PersonalityEnum): void => {
        setQuestionnaire((prevState: Questionnaire) =>
            ({...prevState, [currentQuestion]: {value: type, label: questionsData[currentQuestion].question}}));
        setCurrentQuestion((count: number) => count + 1);
    }

    const resetAll = (): void => {
        setCurrentQuestion(0);
        setQuestionnaire({});
    }

    //TODO: add mapper function and add utils, also need to add constants
    const calculatePersonalityType = (): string => {
        const personalityCounter = {
            [PersonalityEnum.Introvert]: 0,
            [PersonalityEnum.Extrovert]: 0,
        };
        const questionnaireArr = Object.values(questionnaire);
        for(let i = 0; i < questionnaireArr.length; i++) {
            questionnaireArr[i].value === PersonalityEnum.Introvert ?
                personalityCounter[PersonalityEnum.Introvert]++ : personalityCounter[PersonalityEnum.Extrovert]++
        }
        return personalityCounter[PersonalityEnum.Introvert] > personalityCounter[PersonalityEnum.Extrovert] ?
            'Introvert' : 'Extrovert';
    }

    const setStep = (stepNumber: number) => {
        setCurrentQuestion(stepNumber);
    }
    //TODO: split a bit more with result comp
    return (
        <>
            <CustomStepper currentStepIndex={currentQuestion} setStep={setStep}/>
            {currentQuestion < questionsData.length && <>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
              <h2>{questionsData[currentQuestion].question}</h2>
              <CustomButtonGroup answers={questionsData[currentQuestion].answers} setAnswer={setAnswer}/>
              <Button onClick={() => setCurrentQuestion((count) => count - 1)}>Back</Button>
            </>}
            {currentQuestion >= questionsData.length && <>
              <h2>You are {calculatePersonalityType()}</h2>
              <Button onClick={resetAll}>Restart Questionnaire</Button>
            </>}
        </>
    )
}
