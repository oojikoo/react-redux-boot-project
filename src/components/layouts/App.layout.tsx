import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from "styled-reset";
import { theme } from '../../theme';

/* stylelint-disable */
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Muli:700|Open+Sans:400,700');
    ${reset};

    button {
        cursor: pointer;

        &:focus,
        &:active {
            outline: none;
        }
    }

    * {
        box-sizing: border-box;
        color: ${(props) => props.theme.blackColor};
    }

    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        background: transparent;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    body {
        display: grid;
        width: 100%;
        min-width: 1200px;
        height: 100vh;
        min-height: 100%;
        margin: 0;
        background-color: ${(props) => props.theme.colorBackgroundGlobal};
        text-rendering: geometricPrecision;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        font-family: 'Lato', 'SF Pro Display', 'Apple SD Gothic Neo', 'Segoe UI', 'Tahoma', 'Arial', sans-serif;
        line-height: 1;
        grid-template: 1fr/1fr;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    body.body--modal-open {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: fixed;
    }

    article,aside,details,figcaption,figure,
    footer,header,hgroup,menu,nav,section {
        display: grid;
    }

    nav ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
        content: '';
        content: none;
    }

    a {
        margin: 0;
        padding: 0;
        background: transparent;
        text-decoration: none;
        font-size: 100%;
        color: #272727;
        vertical-align: baseline;
    }

    img,
    a,
    div[role=button] {
        -webkit-user-drag: none;
        user-select: none;
    }

    /* change colours to suit your needs */
    ins {
        background-color: #ff9;
        text-decoration: none;
        color: #000;
    }

    /* change colours to suit your needs */
    mark {
        background-color: #ff9;
        font-style: italic;
        font-weight: bold;
        color: #000;
    }

    del {
        text-decoration: line-through;
    }

    abbr[title],
    dfn[title] {
        cursor: help;
        border-bottom: 1px dotted;
    }

    table {
        border-spacing: 0;
        border-collapse: collapse;
    }

    /* change border colour to suit your needs */
    hr {
        display: grid;
        height: 1px;
        margin: 1em 0;
        padding: 0;
        border: 0;
        border-top: 1px solid #ccc;
    }

    input,
    select {
        vertical-align: middle;
    }

    input:focus {
        outline: none;
    }
`;
/* stylelint-enable */

function AppWrapper(props) {
    return (
        <ThemeProvider theme={theme}>
        <>
          {props.children}
          <GlobalStyle />
        </>
        </ThemeProvider>
    );
}

export default AppWrapper;
