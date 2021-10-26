import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start ;
    justify-content:flex-start;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    background: #FFF;

    @media(max-width: 722px) {

        flex-direction: column;
        img {
            width: 100%;
            margin: 0;
        }
    }
`

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Lato', sans-serif;
    gap: 70px;
    margin: 25px 0 16px 0;
    padding: 0 12px;
    border-right: 1px solid #57606a;

    h1 {
        font-size: 24px;
        font-weight: bold;
        color: #24292f;
    }

    a { 
        color: #57606a;
        text-decoration: none;
        font-weight: normal;
        font-size: 18px;
    }

    @media(max-width: 768px) {
        width: 100%;
    }

    @media(max-width: 722px) {
        margin: 0;
        padding: 0;
        border: none;
        gap: 35px;
        padding: 25px 25px 0;
    }
`

export const WrapperInfoUserSocial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 50px;
    color: #57606a;
    gap: 8px;

    font-family: 'lato', sans-serif;

    img {
        width: 16px;
        margin-right: 4px;
    }

    .bio {
        font-size: 14px;
        padding-bottom: 6px;
        border-bottom: 1px solid #57606a;
        margin-bottom: 8px;
        
        @media(max-width: 722px) {
            margin: 0;
            padding: 0;
        }
    }

    @media(max-width: 768px) {
        margin: 50px 20px;
    }

    @media(max-width: 722px) {
        margin: 0;
        padding: 0;
        padding: 0 25px 25px;
    }

`

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 6px;

    img {
        width: 18px;
    }

    .user-info {
        display: flex;
        gap: 4px;
    }

    h4 {
        font-size: 16px;
        color: #57606a;
        font-weight: bold;
    }

    i {
        line-height: 10px;
    }


    @media(max-width: 768px) {
        flex-wrap: wrap; 
    }
`

export const WrapperImage = styled.img`
    border-radius: 8px;
    width: 200px;
    margin: 8px;
`