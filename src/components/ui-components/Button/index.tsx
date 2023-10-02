import React from "react";
import * as SC from './styles'
interface IButtonProps {
    [key: string]: any;
}
export const Button = (props:IButtonProps) => <SC.Button {...props}></SC.Button>