import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
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

export function MultiFormProvider({ children, $schema, $onSubmit }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [displayValues, setDisplayValues] = useState({});

    const setDisplayValue = useCallback((name, value) => {
        setDisplayValues((prev) => ({ ...prev, [name]: value }));
    }, []);

    const resetDisplayValues = useCallback(() => {
        setDisplayValues({});
    }, []);

    const {
        register,
        handleSubmit,
        trigger,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver($schema),
    });

    const nextStep = useCallback(() => {
        setCurrentStep((step) => step + 1);
    }, []);

    const prevStep = useCallback(() => {
        setCurrentStep((step) => step - 1);
    }, []);

    const handleNext = useCallback(
        async (fields) => {
            const isValid = await trigger(fields);
            if (isValid) {
                nextStep();
            }
        },
        [trigger, nextStep]
    );

    const handleFinalSubmit = useCallback(
        () =>
            handleSubmit((data) => {
                $onSubmit(data);
                reset();
                resetDisplayValues();
            })(),
        [handleSubmit, $onSubmit, reset]
    );

    const value = useMemo(
        () => ({
            register,
            handleSubmit,
            trigger,
            reset,
            setValue,
            errors,
            currentStep,
            setCurrentStep,
            handleNext,
            handleFinalSubmit,
            prevStep,
            displayValues,
            setDisplayValue,
        }),
        [
            register,
            reset,
            handleSubmit,
            trigger,
            errors,
            currentStep,
            handleNext,
            handleFinalSubmit,
            prevStep,
            setValue,
            displayValues,
            setDisplayValue,
        ]
    );

    return <MultiFormContext.Provider value={value}>{children}</MultiFormContext.Provider>;
}
