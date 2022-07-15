import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {Answer, PersonalityEnum} from "../../mocks/questions";

type CustomButtonGroupProps = {
    answers: Answer[];
    setAnswer: (type: PersonalityEnum) => void;
}

//TODO: refactor styles
export const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({answers, setAnswer}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                    m: 1,
                },
            }}
            style={{justifyContent: 'center'}}
        >
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                {answers.map((ans: Answer) => <Button key={ans.value} onClick={() => setAnswer(ans.value)}>{ans.label}</Button>)}
            </ButtonGroup>
        </Box>
    );
}
