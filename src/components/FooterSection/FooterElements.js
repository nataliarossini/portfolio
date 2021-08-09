import styled from 'styled-components';

export const FooterContainer = styled.footer`
    height: 30vh;
    background: #F3EDEC;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`
export const FooterWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    ${'' /* justify-content: ; */}

`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    ${'' /* margin: 40px auto 0 auto; */}

    ${'' /* @media screen and (max-width: 820px){
        flex-direction: column;
    } */}

`
export const SocialIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

`
export const SocialIconLink = styled.a`
    text-style: none;
    color: rgba(0, 0, 0, .4);
    font-size: 24px;
    background-color: #fff;
    padding: 16px;
    transition: 0.3s;
    text-align: center;
    line-height: 1px;
    ${'' /* height: 35px; */}

    &:hover {
        color: #e1a681;
    }

`

export const PageRights = styled.div`
    color: rgba(0, 0, 0, .6);
    padding: 2rem;
    font-family: 'Work Sans', sans-serif;
    font-weight: bolder;

`