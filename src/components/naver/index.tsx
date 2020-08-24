import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NaverCard, NaverImage, NaverJob, NaverName, NaverSvgContainer } from './styles';
import {NaverI} from '../../store/content/navers/types'
import NaverMoreInfosComponent from '../naverMoreInfos'
import person from '../../assets/generic-person.jpg'
import { TypedUseSelectorHook } from 'react-redux';
import { ModalsI } from '../../store/content/modals/types';
import { showModal } from '../../store/content/modals/actions';
import { showEdit } from '../../store/content/navers/actions';

export const NaverComponent: React.FC<NaverI> = ({ children, id, name, admission_date, job_role, user_id, project, birthdate, url }) => {
    const [isUserInfosShowing, setIsUserInfosShowin] = useState(false)

    const handleUserInfosShowing = () => setIsUserInfosShowin(!isUserInfosShowing)
    const dispatch = useDispatch()

    const modalsStoreTyped: TypedUseSelectorHook<ModalsI> = useSelector;
    const modalsStore = modalsStoreTyped(state => state.Modals);

    const callShowModal = () => dispatch(showModal('confirm_delete', 'Excluir Naver', 'Tem certeza que deseja excluir este Naver?', { id }))
    const callShowEdit = () => dispatch(showEdit(id))

    return (
        <>
            { isUserInfosShowing && 
                <NaverMoreInfosComponent
                    id={id}
                    name={name}
                    admission_date={admission_date}
                    job_role={job_role}
                    user_id={user_id}
                    project={project}
                    birthdate={birthdate}
                    url={url}
                    handleUserInfosShowing={handleUserInfosShowing}
                >
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => callShowModal()}>
                        <path d="M1 18H13V4H1V18ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#212121"/>
                    </svg>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => callShowEdit()}>
                        <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM18.41 4.34L14.66 0.589996L12.13 3.13L15.88 6.88L18.41 4.34Z" fill="#212121"/>
                    </svg>
                </NaverMoreInfosComponent>
            }
            <NaverCard>
                <NaverImage src={url} alt={name} onClick={() => handleUserInfosShowing()}/>
                <NaverName>{name}</NaverName>
                <NaverJob>{job_role}</NaverJob>
                <NaverSvgContainer>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => callShowModal()}>
                        <path d="M1 18H13V4H1V18ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#212121"/>
                    </svg>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => callShowEdit()}>
                        <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM18.41 4.34L14.66 0.589996L12.13 3.13L15.88 6.88L18.41 4.34Z" fill="#212121"/>
                    </svg>
                </NaverSvgContainer>

            </NaverCard>
        </>
    )
}
