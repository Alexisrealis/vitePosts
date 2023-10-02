import styled from 'styled-components'

export const ModalWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgb(0, 0, 0, 0.5);
z-index: 1;
`

export const Modal = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
color: black;
border: 1px solid black;
padding: 10px 20px;
background: white;
border-radius: 25px;
`
