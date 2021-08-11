import styled from 'styled-components';

export const ButtonHref = styled.a`
    background: transparent;
    padding: 1rem 1.2rem;
    white-space: nowrap;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    outline: none;
    border: 0.8px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);

    &:hover {
        background-color: rgba(225,166,129, .1);
        transition: all 0.5s ease-in-out;
    }

`
