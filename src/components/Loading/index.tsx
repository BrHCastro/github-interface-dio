import React from 'react'
import * as S from './styled'
import loadingImage from '../../assets/gifs/loading.gif'

export function Loading() {
    return (
        <S.Wrapper>
            <img src={ loadingImage } alt="Loading..." />
            <h1>Loading...</h1>
        </S.Wrapper>
    )
}
