import React, { ReactNode } from "react";
import * as SC from './styles'

interface IModalProps {
    children: ReactNode;
    [key: string]: any;
}

export const Modal = ({ children, ...rest }: IModalProps) => {
    return <SC.Modal {...rest}>{children}</SC.Modal>
}