import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import "./color.css";
const GlobalStyle = createGlobalStyle`
    ${reset}
    html,body{
        height:100%;
    }
    body{
        background-color : var(--white);
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .pageWrapper{
        width: 23.4375rem;
        height: 50.75rem;
        border-radius: 1.25rem;
        background-color : var(--black);
    }
`;

export default GlobalStyle;