import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import logo from '../../assets/logo.png'
import { LayoutContainer, LoginForm, LoginFormLabel, LoginFormInputContainer, LoginFormInput, LoginFormSubmit } from './styles';
import { requestLogin } from '../../store/content/auth/actions';
import { AuthI } from '../../store/content/auth/types';
import { useHistory } from 'react-router';

const LoginPage: React.FC = () => {

    const authStoreTyped: TypedUseSelectorHook<AuthI> = useSelector;
    const authStore = authStoreTyped(state => state.Auth);
    const history = useHistory();

    const dispatch = useDispatch()
    const [inputs, setInputs] = useState<{email: string, password: string}>({
        email: '',
        password: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, [e.target.name]: e.target.value})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        return dispatch(requestLogin(inputs.email, inputs.password))
    }

    useEffect(() => {
        function efFunc() {
            if (authStore.isSignedIn) {
                history.push('/home')
            }  
        }
        return efFunc()
    }, [authStore])

    return (
        <LayoutContainer>
            { authStore.hasErr && <h1>Email ou senha incorretos.</h1>}
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
                        type="password" 
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
