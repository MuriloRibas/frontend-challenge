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
    line-height: 24px;
    transition: opacity 0.25s;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`