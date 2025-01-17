import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
@import url('~pretendard/dist/web/pretendard.css');
    ${reset}
   
    * {
        font-size: ${({ theme }) => theme.fontSizes.default};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* white-space: pre-line; */
    }
     body {
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
    html, body,#root {
        width: 100%;
        height: 100% ;
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
    input, textarea {
        font-size: ${({ theme }) => theme.fontSizes.input};
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
    section {
        width: 100%;
    }
`;
