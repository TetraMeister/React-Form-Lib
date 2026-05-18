import { createContext, useContext, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const MultiFormContext = createContext();

export const useMultiForm = () => {
    const context = useContext(MultiFormContext);

    if (!context) {
        throw new Error('useMultiForm must be used within MultiFormProvider');
    }

    return context;
};

export function MultiFormProvider({ children, schema }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [totalSteps, setTotalSteps] = useState(1);

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const value = useMemo(
        () => ({
            register,
            handleSubmit,
            trigger,
            errors,
            currentStep,
            setCurrentStep,
            totalSteps,
            setTotalSteps,
        }),
        [register, handleSubmit, trigger, errors, currentStep, totalSteps]
    );

    return <MultiFormContext.Provider value={value}>{children}</MultiFormContext.Provider>;
}
