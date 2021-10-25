import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    background: transparent;

    img {
        width: 100%;
        max-width: 300px;
        margin: 40px 0;
    }

    h2 {
        font-size: 42px;
        font-weight: bold;
        color: #57606A;
        margin-bottom: 26px;
    }

    span {
        color: #57606A;
    }
`