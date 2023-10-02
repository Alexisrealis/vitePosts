import styled from 'styled-components'

export const Textarea = styled.textarea`
    resize: none;
    width: 100%;
    outline: none;
`

export const Button = styled.button`
    border: none;
    background: black;
    color: white;
    border-radius: 15px;
    padding: 10px 0;
    cursor: pointer;

    &:hover {
        background: grey;
    }

    &:disabled {
        background: grey;
        cursor: default;
    }
`

