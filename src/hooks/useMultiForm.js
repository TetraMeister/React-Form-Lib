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
    const [submitStatus, setSubmitStatus] = useState(null);

    const setDisplayValue = useCallback((name, value) => {
        setDisplayValues((prev) => ({ ...prev, [name]: value }));
    }, []);

    const resetDisplayValues = useCallback(() => {
        setDisplayValues({});
    }, []);

    const { register, handleSubmit, trigger, setValue, reset, formState } = useForm({
        resolver: zodResolver($schema),
        mode: 'onTouched',
        reValidateMode: 'onChange',
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

    const handleSubmitResp = useCallback(
        (status) => {
            setSubmitStatus(status);
            const timer = setTimeout(() => {
                reset();
                resetDisplayValues();
                setSubmitStatus(null);
                setCurrentStep(1);
            }, 3000);

            return () => clearTimeout(timer);
        },
        [reset, resetDisplayValues]
    );

    const handleFinalSubmit = useCallback(
        () =>
            handleSubmit(async (data) => {
                try {
                    await $onSubmit(data);
                    handleSubmitResp('success');
                } catch {
                    handleSubmitResp('error');
                }
            })(),
        [handleSubmit, $onSubmit, handleSubmitResp]
    );

    const value = useMemo(
        () => ({
            register,
            handleSubmit,
            trigger,
            reset,
            setValue,
            currentStep,
            setCurrentStep,
            handleNext,
            handleFinalSubmit,
            prevStep,
            displayValues,
            setDisplayValue,
            submitStatus,
        }),
        [
            register,
            reset,
            handleSubmit,
            trigger,
            currentStep,
            handleNext,
            handleFinalSubmit,
            prevStep,
            setValue,
            displayValues,
            setDisplayValue,
            submitStatus,
        ]
    );

    return (
        <MultiFormContext.Provider value={{ ...value, errors: formState.errors }}>{children}</MultiFormContext.Provider>
    );
}
