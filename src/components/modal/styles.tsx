import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;

    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`

export const ModalWrapper = styled.div`
    width: 592px;
    height: auto;
    background-color: white;
    display: flex;
    flex-flow: column;
    padding: 32px;
    position: relative;
    z-index: 999999;

`

export const ModalHeader = styled.h1`
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.medium};
    margin-bottom: 24px;
`

export const ModalContent = styled.p`
    color: ${props => props.theme.colors.primary};

`

export const ModalIconCloseContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 32px;
    &:hover {
        cursor: pointer;
    }
`

export const PrimaryButton = styled.button`
    width: 176px;
    height: 40px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    transition: opacity 0.25s;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export const SecondaryButton = styled.button`
    width: 176px;
    height: 40px;
    background-color: white;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    margin-right: 24px;
    transition: opacity 0.25s;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export const WrapperButtons = styled.div`
    margin: 33px 0px 0px auto;
`