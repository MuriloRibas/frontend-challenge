import React from 'react'
import logo from '../../assets/logo.png'
import { NavContainer, NavButton } from './styles';

export const NavbarComponent = () => {
    return (
        <NavContainer>
            <img src={logo} alt="Logo da empresa" />
            <NavButton>Sair</NavButton>
        </NavContainer>
    )
}
