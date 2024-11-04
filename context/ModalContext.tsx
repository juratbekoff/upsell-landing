"use client"

import React, {createContext, ReactNode, useContext, useState} from "react";

type ModalContextType = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({children}: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{isOpen, onOpen, onClose}}>
            {children}
        </ModalContext.Provider>
    );
};

export const useOpenMenuModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useOpenMenuModal must be used within a ModalProvider");
    }

    return context;
};
