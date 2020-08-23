import React from 'react'
import { NaverCard, NaverImage, NaverJob, NaverName, NaverSvgContainer } from './styles';
import {NaverI} from '../../store/content/navers/types'
import person from '../../assets/generic-person.jpg'

export const NaverComponent: React.FC<NaverI> = ({ children, name, admission_date, job_role, user_id, project, birthdate, url }) => {
    return (
        <NaverCard>
            <NaverImage src={url} alt={name}/>
            <NaverName>{name}</NaverName>
            <NaverJob>{job_role}</NaverJob>
            <NaverSvgContainer>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 18H13V4H1V18ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#212121"/>
                </svg>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM18.41 4.34L14.66 0.589996L12.13 3.13L15.88 6.88L18.41 4.34Z" fill="#212121"/>
                </svg>
            </NaverSvgContainer>

        </NaverCard>
    )
}
