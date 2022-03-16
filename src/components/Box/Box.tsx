import styled from 'styled-components';

export const Box = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    width: 500px;
    height: 500px;
    background: red;
    margin: 0 1rem;
    background: ${({theme}) => theme.colors.bgBox};
    border-radius: .5rem;
`;
