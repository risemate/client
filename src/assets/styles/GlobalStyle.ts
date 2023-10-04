import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-size: ${({ theme }) => theme.fontSizes.standard};
    }
    a {
        vertical-align: baseline;
        text-decoration: none;
        color: inherit;
    }
    img {
        border: 0;
        max-width: 100%;
        vertical-align: middle;
    }
    input {
        vertical-align: middle;
        border: none;
    }
    button, input[type=button] {    
        background: none;
        border: none;
        cursor: pointer;
    }
    ol, ul {
        list-style: none;
    }
    .a11y-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }
`;
