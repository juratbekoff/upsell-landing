"use client";

import React, {createContext, ReactNode, useContext} from 'react';
import en from '../locales/en.json';

type LocaleContextType = {
    t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const translations = en; // Assuming English is the default

export const LocaleProvider = ({children}: { children: ReactNode }) => {
    const t = (key: string): string => {
        const keys = key.split('.');
        return keys.reduce((acc: any, k) => (acc && acc[k] !== undefined ? acc[k] : key), translations) as string;
    };

    return (
        <LocaleContext.Provider value={{t}}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};
