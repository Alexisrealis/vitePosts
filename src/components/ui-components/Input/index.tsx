import React from "react";
import * as SC from './styles'

interface IFieldProps {
    [key: string]: any;
}

export const Input = (props: IFieldProps) => <SC.Input {...props} />