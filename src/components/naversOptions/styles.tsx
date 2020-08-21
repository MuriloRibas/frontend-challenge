import styled from 'styled-components';

export const NaversOptionsContainer = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NaversOptionsTitle = styled.h1`
    font-size: ${props => props.theme.font.size.high};
    font-weight: ${props => props.theme.font.weight.bold};

`

export const NaversOptionsOption = styled.button`
    border: none;
    background-color: ${props => props.theme.colors.primary};
    width: 176px;
    height: 40px;
    font-size: ${props => props.theme.font.size.minimal};
    font-weight: ${props => props.theme.font.weight.bold};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.25s;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
