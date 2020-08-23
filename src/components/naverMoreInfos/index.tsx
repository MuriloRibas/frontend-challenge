import React from 'react'
import {NaverI} from '../../store/content/navers/types'
import { Container, InfosContainer, InfosImage, InfosSideContainer, InfosInside, ContainerCloseIcon, ContainerBottomIcons } from './styles'

interface NaverHandleI extends NaverI {
    handleUserInfosShowing: () => void
}

const NaverMoreInfosComponent: React.FC<NaverHandleI> = ({ children, name, admission_date, job_role, user_id, project, birthdate, url, handleUserInfosShowing }) => {
    return (
        <Container>
            <InfosContainer>
                <InfosImage src={url}/>
                <InfosSideContainer>
                    <ContainerCloseIcon onClick={() => handleUserInfosShowing()}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#212121"/>
                        </svg>
                    </ContainerCloseIcon>
                    <InfosInside>
                        <h1>{name}</h1>
                        <p>{job_role}</p>
                    </InfosInside>
                    <InfosInside>
                        <h2>Idade</h2>
                        <p>Lorem Ipsum</p>
                    </InfosInside>
                    <InfosInside>
                        <h2>Tempo de empresa</h2>
                        <p>Lorem Ipsum</p>
                    </InfosInside>
                    <InfosInside>
                        <h2>Projetos que participou</h2>
                        <p>Lorem Ipsum</p>
                    </InfosInside>
                    <ContainerBottomIcons>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 18H13V4H1V18ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#212121"/>
                        </svg>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM18.41 4.34L14.66 0.589996L12.13 3.13L15.88 6.88L18.41 4.34Z" fill="#212121"/>
                        </svg>
                    </ContainerBottomIcons>
                </InfosSideContainer>
            </InfosContainer>
        </Container>
    )
}

export default NaverMoreInfosComponent