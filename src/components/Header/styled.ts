import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    gap: 6px;

    input {
        background: #FFF;
        width: 100%;
        height: 30px;
        padding: 0 10px;
        border-radius: 8px;
        color: #57606a;
        font-weight: bold;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
        outline: none;
    }

    button {
        background: #FFF;
        padding: 0 10px;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
        font-weight: bold;
        color: #57606a;
        transition: background .2s;
        outline: none;

        &:hover {
            background: #57606a;
            color: #FFF;
        }
    }
`