import React, { ReactNode } from "react";
import * as SC from './styles'

interface IFormProps {
    children: ReactNode;
    [key: string]: any;
}

export const Form = ({ children, ...rest }: IFormProps) => <SC.Form {...rest}>{children}</SC.Form>