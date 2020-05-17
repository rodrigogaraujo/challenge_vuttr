import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    background: #fff;
    padding: 10px;
    input[type="text"] {
        border: none;
        background: transparent;
        margin-left: 5px;
        outline: none;
        width: 100%;
    }
    svg {
        margin-left: 5px;
    }

    @media screen and (max-width: 560px) {
        form {
            max-width: 130px;
        }
    }
`;
