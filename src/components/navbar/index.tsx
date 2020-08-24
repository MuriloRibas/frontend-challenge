import React from 'react'
import logo from '../../assets/logo.png'
import { NavContainer, NavButton } from './styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/content/auth/actions'

export const NavbarComponent = () => {
    const dispatch = useDispatch()

    const callLogout = () => {
        dispatch(logout())
    }

    return (
        <NavContainer>
            <img src={logo} alt="Logo da empresa" />
            <NavButton onClick={() => callLogout()}>Sair</NavButton>
        </NavContainer>
    )
}
