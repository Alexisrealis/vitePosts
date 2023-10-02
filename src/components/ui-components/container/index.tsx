import React, { ReactNode } from "react";
import * as SC from './style'

interface IContainerProps {
    children: ReactNode;
}

export const Container = ({ children }: IContainerProps) => <SC.Container>{children}</SC.Container>