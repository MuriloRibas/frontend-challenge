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
                        { children }
                    </ContainerBottomIcons>
                </InfosSideContainer>
            </InfosContainer>
        </Container>
    )
}

export default NaverMoreInfosComponent