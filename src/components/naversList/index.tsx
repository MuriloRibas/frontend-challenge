import React from 'react'
import { NaversListContainer } from './styles';
import { NaverComponent } from '../naver';

export const NaversListComponent: React.FC = () => {
    return (
        <NaversListContainer>
            <NaverComponent/>
            <NaverComponent/>
            <NaverComponent/>
            <NaverComponent/>
            <NaverComponent/>

        </NaversListContainer>
    )
}
