import styled from 'styled-components';

export const NavContainer = styled.nav`
    width: calc(100vw - 64px);
    height: 85px;
    padding: 0px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavButton = styled.button`
    border: none;
    color: #000000;
    background-color: white;
    font-size: ${props => props.theme.font.size.minimal};
    font-weight: ${props => props.theme.font.weight.bold};

`