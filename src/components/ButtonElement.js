import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Button = styled(Link)`
    background: transparent;
    padding: 1rem 1.2rem;
    white-space: nowrap;
    ${'' /* font-size: ${({fontBig}) => (fontBig ? '1.5rem' : '1.2rem')}; */}
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    outline: none;
    border: 0.8px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgba(225,166,129, .1);
        transition: all 0.5s ease-in-out;
    }

`