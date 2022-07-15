import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

type CustomStepperProps = {
    currentStepIndex: number;
    setStep: (stepNumber: number) => void;
}

const steps: Array<{label: string, value: number}> = [
    {label: 'First', value: 0},
    {label: 'Second', value: 1},
    {label: 'Third', value: 2},
    {label: 'Finish', value: 3}
];

export const CustomStepper: React.FC<CustomStepperProps> = ({currentStepIndex, setStep}) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={currentStepIndex} alternativeLabel>
                {steps.map((step: {label: string, value: number}): React.ReactNode => (
                    <Step key={step.value} onClick={() => setStep(step.value)}>
                        <StepLabel>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
