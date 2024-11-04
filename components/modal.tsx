"use client"

import menu from "@/public/menu.svg";
import Image from "next/image";
import {useOpenMenuModal} from "@/context/ModalContext";

const Modal = () => {
    const {onOpen} = useOpenMenuModal()
    
    return (
        <Image
            onClick={onOpen}
            src={menu}
            alt="Menu"
            width={40}
            height={40}
            fetchPriority="high"
            className="hidden max-md:flex"
        />
    );
};

export default Modal;