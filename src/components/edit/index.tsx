import React from 'react'
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { NaversI } from "../../store/content/navers/types";
import { useState } from "react";
import { Container, HeaderContainer, AddForm, ButtonSubmit } from "../add/styles";
import { InputAndLabelContainer, Label, Input } from "../formUtils";
import { showNavers, editNaver } from "../../store/content/navers/actions";

export const EditComponent: React.FC = () => {
    const naversStoreTyped: TypedUseSelectorHook<NaversI> = useSelector;
    const naversStore = naversStoreTyped(state => state.Navers);

    const [inputs, setInputs] = useState({
        name: '',
        job_role: '',
        birthdate: '',
        admission_date: '',
        project: '',
        url: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, [e.target.name]: e.target.value})

    const dispatch = useDispatch()

    const showNaversList = () => dispatch(showNavers())

    const callEditNaver = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(editNaver(naversStore.id_editing, inputs))
    }

    return (
        <Container>
            <HeaderContainer>
                <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => showNaversList()}>
                    <path d="M12.51 1.86998L10.73 0.0999756L0.839996 9.99998L10.74 19.9L12.51 18.13L4.38 9.99998L12.51 1.86998Z" fill="black"/>
                </svg>
                <h1>Editar Naver</h1>
            </HeaderContainer>
            <AddForm onSubmit={(e) => callEditNaver(e) }>
                <InputAndLabelContainer width="280px">
                    <Label htmlFor="name">Nome</Label>
                    <Input name="name" id="name" value={inputs.name} onChange={(e) => handleChange(e)} placeholder="Nome"/>
                </InputAndLabelContainer>
                <InputAndLabelContainer width="280px">
                    <Label htmlFor="job_role">Cargo</Label>
                    <Input name="job_role" id="job_role" value={inputs.job_role} onChange={(e) => handleChange(e)} placeholder="Cargo"/>
                </InputAndLabelContainer>
                <InputAndLabelContainer width="280px">
                    <Label htmlFor="birthdate">Idade</Label>
                    <Input name="birthdate" id="birthdate" value={inputs.birthdate} onChange={(e) => handleChange(e)} placeholder="Idade"/>
                </InputAndLabelContainer>
                <InputAndLabelContainer width="280px">
                    <Label htmlFor="admission_date">Tempo de empresa</Label>
                    <Input name="admission_date" id="admission_date" value={inputs.admission_date} onChange={(e) => handleChange(e)} placeholder="Tempo de empresa"/>
                </InputAndLabelContainer>
                <InputAndLabelContainer width="280px">
                    <Label htmlFor="project">Projetos que participou</Label>
                    <Input name="project" id="project" value={inputs.project} onChange={(e) => handleChange(e)} placeholder="Projetos que participou"/>
                </InputAndLabelContainer>
                <InputAndLabelContainer width="280px">
                    <Label htmlFor="url">URL da foto do Naver</Label>
                    <Input name="url" id="url" value={inputs.url} onChange={(e) => handleChange(e)} placeholder="URL da foto do Naver"/>
                </InputAndLabelContainer>
                <ButtonSubmit type="submit">Salvar</ButtonSubmit>
            </AddForm>
        </Container>
    )
}