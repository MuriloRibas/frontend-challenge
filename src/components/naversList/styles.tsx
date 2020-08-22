import styled from 'styled-components';

export const NaversListContainer = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    /* & > :not(:last-child) {
        margin-right: 32px;
    } */
    @media (max-width: 640px) {
        justify-content: center;
    }
`;
