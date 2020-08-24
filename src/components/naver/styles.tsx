import styled from 'styled-components';

export const NaverCard = styled.div`
    max-width: 281px;
    height: 420px;
    display: flex;
    flex-flow: column;
    line-height: 24px;
    margin-bottom: 32px;
`;

export const NaverImage = styled.img`
    width: 280px;
    height: 280px;
`

export const NaverName = styled.h2`
    font-size: ${props => props.theme.font.size.default};
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.theme.colors.primary};
    margin-top: 16px;
    line-height: 18px;
`

export const NaverJob = styled.p`
    color: ${props => props.theme.colors.primary};
    line-height: 24px;

`

export const NaverSvgContainer = styled.div`
    width: 49px;
    margin: 13px 0px 0px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
        cursor: pointer;
    }
`