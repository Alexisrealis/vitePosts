import styled from 'styled-components'
interface IButtonProps {
    primary?: boolean;
}
export const Button = styled.button<IButtonProps>`
    border: ${(props) => (props.primary ? "none" : '1px solid')};
    background: ${(props) => (props.primary ? "black" : 'white')};
    padding: ${(props) => (props.primary ? '10px 0px' : '5px 10px')};
    color: ${(props) => (props.primary ? 'white' : 'black')};
    border-radius: ${(props) => (props.primary ? '15px' : '10px')};
    cursor: pointer;

    &:hover {
        background: ${(props) => (props.primary ? "grey" : 'red')};
        color: white;
        border: ${(props) => (props.primary ? "none" : '1px solid black')};
    }

    &:disabled {
        background: grey;
        cursor: default;
    }
`

