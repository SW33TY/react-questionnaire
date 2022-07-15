export enum PersonalityEnum {
    Introvert,
    Extrovert
}

export type Answer = {
    value: PersonalityEnum,
    label: string
}

export type MainQuestion = {
    question: string,
    answers: Answer[]
}

export const QuestionsMock: MainQuestion[] = [
    {
        question: "Do you prefer to stay alone?",
        answers: [{
                value: PersonalityEnum.Introvert,
                label: 'Yes'
            },{
                value: PersonalityEnum.Extrovert,
                label: 'No'
            }
        ]
    },
    {
        question: "Would you go on a party or it's better to stay at home?",
        answers: [{
                value: PersonalityEnum.Introvert,
                label: 'Stay at home'
            },{
                value: PersonalityEnum.Extrovert,
                label: 'Go to party'
            }
        ]
    },
    {
        question: "Is it easy for you to talk with people?",
        answers: [{
                value: PersonalityEnum.Extrovert,
                label: "Yes, it's easy"
            },{
                value: PersonalityEnum.Introvert,
                label: "No, it's not easy"
            }
        ]
    },
]