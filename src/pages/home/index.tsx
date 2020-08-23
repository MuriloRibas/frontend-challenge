import React, { useEffect } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { NavbarComponent } from '../../components/navbar/index';
import NaversOptionsComponent from '../../components/naversOptions';
import { HomeContainer } from './styles';
import { NaversListComponent } from '../../components/naversList/index';
import { requestNavers } from '../../store/content/navers/actions';
import { NaversI } from '../../store/content/navers/types';
import { AddComponent } from '../../components/add';
import ModalComponent from '../../components/modal';
import { PrimaryButton, SecondaryButton } from '../../components/modal/styles';

const HomePage: React.FC = () => {

    const naversStoreTyped: TypedUseSelectorHook<NaversI> = useSelector;
    const naversStore = naversStoreTyped(state => state.Navers);

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(requestNavers())
    }, [])

    return (
        <HomeContainer>
            <NavbarComponent/>
            {
                naversStore.show === 'navers' && 
                    <>
                        <NaversOptionsComponent />
                        <NaversListComponent
                            data={naversStore.data}
                        />
                        {/* <ModalComponent header="Naver criado" content="Naver criado com sucessosssssssssssssssssssssssssssssssssssssss!">
                            <SecondaryButton>Sair</SecondaryButton>
                            <PrimaryButton>Confirmar</PrimaryButton>
                        </ModalComponent> */}
                    </>
            }

            {
                naversStore.show === 'add' && 
                    <AddComponent/>
            }
        </HomeContainer>
    )
}

export default HomePage