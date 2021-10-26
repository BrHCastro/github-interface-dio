import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    width: calc(50% - 16px);
    min-height: 200px;
    padding: 16px;
    font-family: 'Lato', sans-serif;
    color: #57606a;
    justify-content: space-between;

    .info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 8px;
        width: 100%;
        word-wrap: anywhere;

        h2 {
            font-weight: bold;
            font-size: 20px;
        }

    }

    .link {
        margin-top: 16px;
        text-align: end;

        a {
            font-size: 16px;
            color: blue;
        }
    }

    @media(max-width: 722px) {
        width: calc(100% - 16px);
    }
`