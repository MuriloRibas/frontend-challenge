import React from 'react'
import { NaversListContainer } from './styles';
import { NaverComponent } from '../naver';
import {NaverI} from '../../store/content/navers/types'

export const NaversListComponent: React.FC<{data: [NaverI]}> = ({ children, data }) => {
    return (
        <NaversListContainer>
            {
                data.map((el, i) => 
                    <NaverComponent 
                        key={i}
                        name={el.name}
                        admission_date={el.admission_date}
                        job_role={el.job_role}
                        user_id={el.user_id}
                        project={el.project}
                        birthdate={el.birthdate}
                        url={el.url}
                    />
                )
            }
        </NaversListContainer>
    )
}
