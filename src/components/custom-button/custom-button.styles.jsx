import styled, {css} from 'styled-components';

const HoverStyles = css`
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const googleSignStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const invertedStyle = css`
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const regularStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const getRegularStyles = props => {
    if(props.isGoogleSignIn) {
        return googleSignStyles;
    }

    return props.inverted ? invertedStyle : regularStyles;
}

export const CustomButtonStyles = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getRegularStyles}
`;