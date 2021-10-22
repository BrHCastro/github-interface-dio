import { ReactNode } from 'react';
import * as S from './styled'

type Children = { 
    children: ReactNode
}

export function Layout({ children } : Children) {
    return (
        <S.WrapperLayout>
            <header>
                header
            </header>
            { children }
        </S.WrapperLayout>
    )
}
