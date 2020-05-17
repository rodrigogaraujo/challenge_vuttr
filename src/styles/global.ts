import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Roboto", sans-serif;
        outline: none;
    }

    body{
        background: #EEEEEE;
    }

    button, input[type="checkbox"]{
        cursor: pointer;
    }
`;
