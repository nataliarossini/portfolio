import styled from 'styled-components';

export const ContactContainer = styled.section`
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${'' /* margin-top: 10%; */}
`
export const ContactWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-gap: 16px;
    @media screen and (max-width: 780px) {
        max-width: 500px;
    }

    @media screen and (max-width: 480px) {
        max-width: 300px;
    }
`
export const ContactH2 = styled.h2`
    max-width: 1000px;
    margin: 0 auto;
    font-size: 32px;
    color: black;
    ${'' /* margin-bottom: 32px; */}
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 400;
    line-height: 1.1;
    color: rgba(0, 0, 0, 0.6);

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ContactP = styled.p`
    font-size: 16px;
    color: rgba(0, 0, 0, .8);
    background: #fff;
    font-family: 'Prata', serif;
    letter-spacing: .04rem;
    margin: 32px 0;
`

export const ImgWrap = styled.div`
    ${'' /* max-width: 80px; */}
    height: 64px;
    margin: auto;
    width: 50%;
    margin-bottom: 32px;
`

export const Img = styled.img`
    width: 64px;
    margin: auto;
    ${'' /* padding-right: 0; */}

    @media screen and (max-width: 480px) {
        width: 48px;
    }

    @media screen and (max-width: 320px) {
        width: 50%;
    }
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
