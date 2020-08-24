import styled from 'styled-components'

interface InputAndLabelContainerI {
    width: string
}

export const Label = styled.label`
    font-size: ${props => props.theme.font.size.minimal};
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.theme.colors.primary};
    line-height: 18px;
`

export const Input = styled.input`
    border: 1px solid ${props => props.theme.colors.inputBorder};
    width: calc(100% - 10px);
    height: 40px;
    padding-left: 7px;
    margin-top: 4px;

`  

export const InputAndLabelContainer = styled.div<InputAndLabelContainerI>`
    width: ${props => props.width} ;
`