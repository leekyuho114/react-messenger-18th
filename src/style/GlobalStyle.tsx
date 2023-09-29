import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import "./color.css";
const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    }
    
    html,body{
        height:100%;
        background-color : var(--white);
        display:flex;
        justify-content: center;
        align-items: center;
        font-family: 'Pretendard-Regular';
    }
    input{
        outline: none;
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
        position : relative;
    }
`;

export default GlobalStyle;