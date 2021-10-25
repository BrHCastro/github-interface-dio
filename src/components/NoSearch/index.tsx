import * as S from './styled'
import noSearchImage from '../../assets/images/no-search.svg'


export function NoSearch() {
    return (
        <S.Wrapper>
            <img src={ noSearchImage } alt="No search yet" />
            <h2>No activity yet</h2>
            <span>Start searching your friends' GitHub accounts by their username.</span>
        </S.Wrapper>
    )
}
