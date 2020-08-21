import styled from 'styled-components';

export const LayoutContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginForm = styled.form`
    width: 384px;
    height: 324px;
    border: 1px solid ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 32px;
    & > * {
        margin-bottom: 32px;
    }
    & :first-child {
        margin-bottom: 40px;
    }
    & :last-child {
        margin-bottom: 0;
    }
`;

export const LoginFormInputContainer = styled.div`
    width: 100%;
`

export const LoginFormLabel = styled.label`
    font-size: ${props => props.theme.font.size.minimal};
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.theme.colors.primary};
`

export const LoginFormInput = styled.input`
    border: 1px solid ${props => props.theme.colors.inputBorder};
    width: calc(100% - 10px);
    height: 40px;
    padding-left: 7px;
`  

export const LoginFormSubmit = styled.button`
    width: 100%;
    height: 40px;
    color: white;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.minimal};

    &:hover {
        transition: opacity 0.25s;
        cursor: pointer;
        opacity: 0.9;
    }
`