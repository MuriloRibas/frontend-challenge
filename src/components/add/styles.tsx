import styled from 'styled-components'

export const Container = styled.div`
    width: calc(100% - 344px);
    height: 80vh;
    padding: 50px 0px 0px 344px;
`

export const AddForm = styled.form`
    width: 592px;
    height: 250px;
    margin-top: 32px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    & > * {
        margin-bottom: 32px;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    width: 215px;
    height: 36px;
    justify-content: space-between;
    align-items: center;
    & > h1 {
        font-weight: ${props => props.theme.font.weight.bold};
        font-size: ${props => props.theme.font.size.medium};
    }
    & > svg:hover {
        cursor: pointer;
    }
`

export const ButtonSubmit = styled.button`
    width: 176px;
    height: 40px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-weight: ${props => props.theme.font.weight.bold};
    margin-left: auto;
    transition: opacity 0.25s;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`