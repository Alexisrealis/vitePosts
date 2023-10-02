import styled from "styled-components";

export const Pages = styled.div`
    font-size: ${(props) => (props.active ? '24px' : '18px')};
    color: ${(props) => (props.active ? 'red' : 'black')};
    margin-left: 30px;
    cursor: pointer;

    &:hover {
        color: red;
      }

`

export const Wrapper = styled.div`
    justify-content: center;
    display: flex;
`

