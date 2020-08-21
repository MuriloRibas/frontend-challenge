import React from 'react'
import { NaversOptionsContainer, NaversOptionsTitle, NaversOptionsOption } from './styles';

const NaversOptionsComponent: React.FC = () => {
    return (
        <NaversOptionsContainer>
            <NaversOptionsTitle>Navers</NaversOptionsTitle>
            <NaversOptionsOption>Adicionar Naver</NaversOptionsOption>
        </NaversOptionsContainer>
    )
}

export default NaversOptionsComponent
