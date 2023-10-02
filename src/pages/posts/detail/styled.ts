
import styled from 'styled-components'

export const Image = styled.img`
    max-width: 300px;
    align-items: center;
    
`

export const Text = styled.div`
    font-size: 34px;
    text-align: center;
`

export const LinkWrapper = styled.div`
    text-align: center;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-top: 15px;
    align-items: center;
`

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    z-index: 1;
`

export const Modaltext = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 10px;
`