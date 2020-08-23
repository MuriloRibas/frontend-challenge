import React from 'react'
import { Container, ModalWrapper, ModalHeader, ModalContent, ModalIconCloseContainer, PrimaryButton, WrapperButtons } from './styles'

interface ModalI {
    header: string
    content: string
}

const ModalComponent: React.FC<ModalI> = ({ children, header, content }) => {
    return (
        <Container>
            <ModalWrapper>
                <ModalIconCloseContainer>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#212121"/>
                    </svg>
                </ModalIconCloseContainer>
                <ModalHeader>{header}</ModalHeader>
                <ModalContent>{content}</ModalContent>
                <WrapperButtons>
                    { children }
                </WrapperButtons>
            </ModalWrapper>
        </Container>
    )
}

export default ModalComponent
