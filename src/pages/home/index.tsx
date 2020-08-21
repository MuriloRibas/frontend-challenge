import React from 'react'
import { NavbarComponent } from '../../components/navbar/index';
import NaversOptionsComponent from '../../components/naversOptions';
import { HomeContainer } from './styles';

const HomePage: React.FC = () => {

    return (
        <HomeContainer>
            <NavbarComponent/>
            <NaversOptionsComponent />
        </HomeContainer>
    )
}

export default HomePage