import React, { ReactNode } from "react";
import * as SC from './styles'

interface ILinkProps {
    children: ReactNode;
    to: string;
    [key: string]: any;
}

export const Link = ({ simple = true, children, ...props }: ILinkProps) => <SC.SimpleLink {...props}>{children}</SC.SimpleLink>
