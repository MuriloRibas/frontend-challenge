import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavbarComponent } from '../../components/navbar/index';
import NaversOptionsComponent from '../../components/naversOptions';
import { HomeContainer } from './styles';
import { NaversListComponent } from '../../components/naversList/index';
import { requestNavers } from '../../store/content/navers/actions';

const HomePage: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestNavers())
    }, [])

    return (
        <HomeContainer>
            <NavbarComponent/>
            <NaversOptionsComponent />
            <NaversListComponent />
        </HomeContainer>
    )
}

export default HomePage