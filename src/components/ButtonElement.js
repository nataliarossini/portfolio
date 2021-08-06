import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Button = styled(Link)`
    background: transparent;
    padding: 0.8rem 1.2rem;
    ${'' /* border-radius: 2px; */}
    white-space: nowrap;
    font-size: ${({fontBig}) => (fontBig ? '1.5rem' : '1.2rem')};
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    outline: none;
    border: 0.8px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }

`