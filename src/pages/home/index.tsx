import React from 'react'
import { NavbarComponent } from '../../components/navbar/index';
import NaversOptionsComponent from '../../components/naversOptions';
import { HomeContainer } from './styles';
import { NaversListComponent } from '../../components/naversList/index';

const HomePage: React.FC = () => {

    return (
        <HomeContainer>
            <NavbarComponent/>
            <NaversOptionsComponent />
            <NaversListComponent />
        </HomeContainer>
    )
}

export default HomePage