import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: white;
    background: ${({lightBackground}) => (lightBackground ? '#f9f9f9' : "#010606")};

    @media screen and (max-width: 760px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    dispplay: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imageStart}) => (imageStart? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 760px){
        grid-template-areas: ${({imageStart}) => (imageStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        
    }
`