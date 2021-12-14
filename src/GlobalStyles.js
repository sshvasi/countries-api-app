import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        --family: Roboto, sans-serif;
        --fs-xs: 12px;
        --fs-sm: 14px;
        --fs-md: 16px;
        --fs-lg: 20px;
        --fs-xl: 28px;
        --fw-light: 300;
        --fw-normal: 400;
        --fw-semi-bold: 600;
        --fw-bold: 800;

        --radii: 8px;
    }

    body[data-theme='dark'] { 
        --colors-bg: hsl(207, 26%, 17%);
        --colors-text: hsl(0, 0%, 100%);
        --colors-elements: hsl(209, 23%, 22%);
        --colors-placeholder: hsl(0, 0%, 100%);
        --color-search: hsl(0, 0%, 100%);
    }
    body[data-theme='light'] {
        --colors-bg: #F0F2F5;
        --colors-text: hsl(200, 15%, 8%);
        --colors-elements: hsl(0, 0%, 100%);
        --colors-input: hsl(0, 0%, 52%);
        --colors-shadow: 1px 1px 5px rgba(0,0,0,0.1);
        --colors-placeholder: #c4c4c4;
        --colors-search: #b2b2b2;
    }

    body {
        margin: 0;
        background-color: var(--colors-bg);
        font-family: var(--family);
        font-weight: var(--fw-light);
        color: var(--colors-text);
    }

    a {
        color: inherit;
    }
`;
