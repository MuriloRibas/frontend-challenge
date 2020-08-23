import React, { useEffect } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { NavbarComponent } from '../../components/navbar/index';
import NaversOptionsComponent from '../../components/naversOptions';
import { HomeContainer } from './styles';
import { NaversListComponent } from '../../components/naversList/index';
import { requestNavers } from '../../store/content/navers/actions';
import { NaversI } from '../../store/content/navers/types';

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
            <NaversOptionsComponent />
            <NaversListComponent
                data={naversStore.data}
            />
        </HomeContainer>
    )
}

export default HomePage