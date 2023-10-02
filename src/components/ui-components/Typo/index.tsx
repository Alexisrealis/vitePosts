import React, { ReactNode } from "react";
import * as SC from './styles'

interface ITypoProps {
    children: ReactNode;
}

export const Typo = ({ children }: ITypoProps) => <SC.Title>{children}</SC.Title> 