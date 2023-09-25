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
    .mainWrapper{
        width: 23.4375rem;
        height: 50.75rem;
        border-radius: 1.25rem;
        background-color : var(--black);
    }
    .pageWrapper{ /*pageWrapper는 header footer 제외 높이*/
        width: 23.4375rem;
        height: 45.6875rem;
    }
`;

export default GlobalStyle;