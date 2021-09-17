import { createGlobalStyle } from "styled-components"

const GlobalCss = createGlobalStyle`
    @font-face {
        font-family: 'Nexa Bold';
        src: url('/assets/fonts/NexaBold.otf');
        font-style: normal;
        font-display: auto;
    }

    html {
        font-size: 16px;
    }
`

export default GlobalCss