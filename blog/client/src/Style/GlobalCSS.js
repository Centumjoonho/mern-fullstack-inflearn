import { createGlobalStyle } from "styled-components";


const GlobalCSS = createGlobalStyle`
 
    *{
        box-sizing: border-box;
    }
    html,body{
        height: 100%;

    }
    #root{
        height: 100%
    }
    input:focus{
        outline: none;
    }

`;

export default GlobalCSS;