import React from 'react'
import { useDispatch } from 'react-redux'
import { NaversOptionsContainer, NaversOptionsTitle, NaversOptionsOption } from './styles';
import { showAdd } from '../../store/content/navers/actions';

const NaversOptionsComponent: React.FC = () => {
    const dispatch = useDispatch()

    const showAddNaverPage = () => dispatch(showAdd())

    return (
        <NaversOptionsContainer>
            <NaversOptionsTitle>Navers</NaversOptionsTitle>
            <NaversOptionsOption onClick={() => showAddNaverPage()}>Adicionar Naver</NaversOptionsOption>
        </NaversOptionsContainer>
    )
}

export default NaversOptionsComponent
