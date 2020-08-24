import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`

export const InfosContainer = styled.div`
    width: 1006px;
    height: 503px;
    background-color: white;
    z-index: 999;
    display: flex;
`

export const InfosImage = styled.img`
    width: 50%;
    height: 100%;
`

export const InfosSideContainer = styled.div`
    width: 50%;
    height: calc(100% - 59px);
    padding: 32px 21px 27px 30.2px;
    display: flex;
    flex-flow: column;
    position: relative;

`

export const InfosInside = styled.div`
    width: auto;
    display: flex;
    flex-flow: column;
    margin-bottom: 24px;
    & > h1 {
        font-weight: ${props => props.theme.font.weight.bold}; 
        font-size: ${props => props.theme.font.size.medium};
        margin-bottom: 10px;
    }

    & > h2 {
        font-size: ${props => props.theme.font.size.default};
        font-weight: ${props => props.theme.font.weight.bold}; 
        margin-bottom: 10px;
    }

`

export const ContainerCloseIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 21px;
    &:hover {
        cursor: pointer;
    }
`

export const ContainerBottomIcons = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0px 0px 27px 35.2px;
    display: flex;
    justify-content: space-around;
    width: 59px;
    &:hover {
        cursor: pointer;
    }
`