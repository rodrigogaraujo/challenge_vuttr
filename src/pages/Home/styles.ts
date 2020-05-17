import styled, { css } from "styled-components";
import { shade } from "polished";

interface Props {
    isVisible: boolean;
}

interface PropsCover {
    isVisibleAdd: boolean;
    isVisibleRemove: boolean;
}

export const Cover = styled.div<PropsCover>`
    display: none;
    ${(props) =>
        (props.isVisibleAdd || props.isVisibleRemove) &&
        css`
            display: block;
        `}
    background: #000;
    opacity: 0.5;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 9998;
`;

export const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    z-index: 9997;
    padding: 20px;
`;

export const ConfirmDelete = styled.div<Props>`
    display: none;
    ${(props) =>
        props.isVisible &&
        css`
            display: block;
        `}
    position: fixed;
    max-width: 670px;
    width: 100%;
    background: #fff;
    padding: 20px 40px;
    z-index: 9999;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);

    header {
        display: flex;
        align-items: center;
        h1 {
            font-weight: normal;
            margin-left: 10px;
        }
    }
    p {
        margin: 15px 0;
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
        button {
            background: #fff 0% 0% no-repeat padding-box;
            border-radius: 5px;
            color: #000;
            transition: all 0.3s;
            padding: 10px;
            margin-left: 10px;
            &:hover {
                background: ${shade(0.1, "#fff")};
            }
        }
    }
`;

export const NewTool = styled.div<Props>`
    display: none;
    ${(props) =>
        props.isVisible &&
        css`
            display: block;
        `}
    position: fixed;
    position: absolute;
    max-width: 670px;
    width: 100%;
    background: #fff;
    padding: 20px 40px;
    z-index: 9999;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    h1 {
        font-weight: normal;
        margin-bottom: 10px;
    }

    > button {
        position: absolute;
        right: 40px;
        top: 20px;
        background: none;
        border: none;
        transition: all 0.3s;

        &:hover {
            color: red;
        }
    }

    form {
        p {
            margin-top: 20px;
            margin-bottom: 5px;
        }
        .button-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            button {
                background: #fff 0% 0% no-repeat padding-box;
                border-radius: 5px;
                color: #000;
                transition: all 0.3s;
                padding: 10px;
                &:hover {
                    background: ${shade(0.1, "#fff")};
                }
            }
        }
    }
`;

export const Header = styled.section`
    h1 {
        padding: 30px 0;
        font-size: 2em;
        font-weight: normal;
    }
    p {
        font-size: 1.3em;
        padding-bottom: 30px;
    }
`;

export const Menu = styled.section`
    display: flex;
    form {
        display: flex;
        flex-basis: 80%;
        align-items: center;

        input[type="checkbox"] {
            margin-left: 8px;
            transform: scale(1.2);
        }

        label {
            font: Semibold 20px/26px Source Sans Pro;
            letter-spacing: 0.4px;
            color: #170c3a;
            margin-left: 5px;
        }
    }
    button {
        flex-basis: 20%;
        background: #fff 0% 0% no-repeat padding-box;
        border-radius: 5px;
        color: #000;
        transition: all 0.3s;
        &:hover {
            background: ${shade(0.1, "#fff")};
        }
    }

    @media screen and (max-width: 560px) {
        form {
            flex-basis: 90%;
        }
    }
`;

export const List = styled.div`
    width: 100%;
    section {
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 15px 20px #00000012;
        border: 1px solid #ebeaed;
        border-radius: 5px;
        margin: 20px 0;
        padding: 20px;
        position: relative;
        p {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        strong + strong {
            margin-left: 8px;
        }

        button {
            position: absolute;
            top: 15px;
            right: 20px;
            background: transparent;
            border: none;
            transition: all 0.3s;
            font-size: 0.9em;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
