import styled from "styled-components";

export const AboutContainer = styled.div`
    color: black;
    background: #fff;
    font-family: 'Prata', serif;
    letter-spacing: .04rem;

    h3{
        font-family: 'Work Sans', sans-serif;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: .2rem;
        margin: 80px 0 40px;
        text-align: center;
        font-size: 1.5rem;
    }
    
    p{
        color: rgba(0, 0, 0, .8);
        background: #fff;
        font-family: 'Prata', serif;
        letter-spacing: .04rem;
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
    
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: 860px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: space-between;
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'` };

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'` };
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    margin: auto;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Heading = styled.h1`
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: .2rem;
    margin-bottom: 48px;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.1;
    color: rgba(0, 0, 0, 0.6);

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
`

export const Icon = styled.img`
    max-height: 40px;
    @media screen and (max-width: 375px) {
        max-height: 30px;
    }
    @media screen and (max-width: 320px) {
        max-height: 20px;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img`
    width: 400px;
    margin: auto;
    ${'' /* padding-right: 0; */}

    @media screen and (max-width: 480px) {
        width: 300px;
    }

    @media screen and (max-width: 320px) {
        width: 100%;
    }
    
`