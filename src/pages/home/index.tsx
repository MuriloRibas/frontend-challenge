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
import { ModalsI } from '../../store/content/modals/types';
import { EditComponent } from '../../components/edit';

const HomePage: React.FC = () => {

    const naversStoreTyped: TypedUseSelectorHook<NaversI> = useSelector;
    const naversStore = naversStoreTyped(state => state.Navers);

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(requestNavers())
    }, [naversStore.show])

    return (
        <>
            <ModalComponent/>
            <HomeContainer>
                <NavbarComponent/>

                {
                    naversStore.show === 'navers' && 
                        <>
                            <NaversOptionsComponent />
                            <NaversListComponent
                                data={naversStore.data}
                            />
                        </>
                }

                {
                    naversStore.show === 'edit' && 
                        <EditComponent/>
                }

                {
                    naversStore.show === 'add' && 
                        <AddComponent/>
                }
            </HomeContainer>
        </>
    )
}

export default HomePage