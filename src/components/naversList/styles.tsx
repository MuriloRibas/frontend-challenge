import styled from 'styled-components';

export const NaversListContainer = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    & > * {
        margin: 0px 32px 32px 0px;
    }
    /* & > :not(:last-child) {
        margin-right: 32px;
    } */
    @media (max-width: 640px) {
        justify-content: center;
        & > *{
            margin: 0px 0px 32px 0px;
        }
    }
`;
