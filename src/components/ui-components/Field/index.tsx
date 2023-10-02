import React, { ReactNode } from "react";

interface IFieldProps {
    children: ReactNode;
    [key: string]: any;
}

export const Field = ({ children, ...rest }: IFieldProps) => <div {...rest}>{children}</div>