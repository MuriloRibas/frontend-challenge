import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { LayoutContainer, LoginForm, LoginFormLabel, LoginFormInputContainer, LoginFormInput, LoginFormSubmit } from './styles';

const LoginPage: React.FC = () => {

    const [inputs, setInputs] = useState<{email: string, password: string}>({
        email: '',
        password: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, [e.target.name]: e.target.value})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Submit!')
    }

    return (
        <LayoutContainer>

            <LoginForm onSubmit={(e) => handleSubmit(e)}>

                <img src={logo} alt="Logo da empresa"/>

                <LoginFormInputContainer>
                    <LoginFormLabel htmlFor="email">
                        E-mail
                    </LoginFormLabel>
                    <LoginFormInput 
                        id="email" 
                        name="email" 
                        type="text" 
                        value={inputs.email}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="E-mail"
                    />
                </LoginFormInputContainer>

                <LoginFormInputContainer>
                    <LoginFormLabel htmlFor="password">
                        Senha
                    </LoginFormLabel>
                    <LoginFormInput 
                        id="password" 
                        name="password" 
                        type="text" 
                        value={inputs.password}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Senha"
                    />
                </LoginFormInputContainer>

                <LoginFormSubmit type="submit">Entrar</LoginFormSubmit>
            </LoginForm>

        </LayoutContainer>
    )
}

export default LoginPage
