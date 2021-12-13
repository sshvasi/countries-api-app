import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        --family: Roboto, sans-serif;
        --fs-sm: 14px;
        --fs-md: 16px;
        --fs-lg: 28px;
        --fw-light: 300;
        --fw-normal: 400;
        --fw-bold: 800;

        --radii: 0.5rem;
    }

    body[data-theme='dark'] { 
        --colors-bg: hsl(207, 26%, 17%);
        --colors-text: hsl(0, 0%, 100%);
        --colors-elements: hsl(209, 23%, 22%);
    }
    body[data-theme='light'] {
        --colors-bg: hsl(0, 0%, 98%);
        --colors-text: hsl(200, 15%, 8%);
        --colors-elements: hsl(0, 0%, 100%);
        --colors-input: hsl(0, 0%, 52%);
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
