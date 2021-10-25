import { ReactNode } from 'react';
import { Header } from '../Header'
import * as S from './styled'

type Children = { 
    children: ReactNode
}

export function Layout({ children } : Children) {
    return (
        <S.WrapperLayout>
            <Header />
            { children }
        </S.WrapperLayout>
    )
}
