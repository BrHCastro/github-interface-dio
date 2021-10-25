import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: #57606a;
    margin: 60px auto;
    width: 100%;
    max-width: 900px;
    height: 100vh;
    max-height: 700px;
    justify-content: center;
    align-items: center;
    gap: 25px;

    img {
        width: 256px;
    }

    h1 { 
        font-size: 40px;
        font-weight: bold;
    }
`