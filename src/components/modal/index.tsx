import React from 'react'
import { Container, ModalWrapper, ModalHeader, ModalContent, ModalIconCloseContainer, PrimaryButton, WrapperButtons, SecondaryButton } from './styles'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { ModalsI } from '../../store/content/modals/types';
import { hideModal } from '../../store/content/modals/actions';
import { deleteNaver } from '../../store/content/navers/actions';

const ModalComponent: React.FC = () => {
    const dispatch = useDispatch()

    const modalsStoreTyped: TypedUseSelectorHook<ModalsI> = useSelector;
    const modalsStore = modalsStoreTyped(state => state.Modals);

    const callHideModal = () => dispatch(hideModal());
    const callDeleteNaver = () => dispatch(deleteNaver(modalsStore.modalData.random.id))
    return (
        <>
            {
                modalsStore.isModalOpen &&
                    <Container>
                        <ModalWrapper>
                            <ModalIconCloseContainer onClick={() => callHideModal()}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#212121"/>
                                </svg>
                            </ModalIconCloseContainer>
                            <ModalHeader>{modalsStore.modalData.title}</ModalHeader>
                            <ModalContent>{modalsStore.modalData.content}</ModalContent>
                            {
                                modalsStore.modalData.type === 'confirm_delete' && 
                                    <WrapperButtons>
                                        <SecondaryButton onClick={() => callHideModal()}>Cancelar</SecondaryButton>
                                        <PrimaryButton onClick={() => callDeleteNaver()}>Excluir</PrimaryButton>
                                    </WrapperButtons>
                            }
                            {/* <WrapperButtons>
                            </WrapperButtons> */}
                        </ModalWrapper>
                    </Container>
            }
        </>
    )
}

export default ModalComponent
