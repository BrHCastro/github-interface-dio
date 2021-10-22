import * as S from './styled'

import userIcon from '../../assets/images/users.svg'
import starIcon from '../../assets/images/star.svg'

export function Profile() {
    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/66978333?v=4" alt="User avatar" />
            <S.WrapperInfoUser>
                <div>
                    <h1>Henrique de Castro</h1>
                    <a href="https://github.com/brhcastro" target="_blank" rel="noreferrer">BrHCastro</a>
                </div>

                <S.WrapperStatusCount>
                    <img src={userIcon} alt="users icon" />
                    <div className="user-info">
                        <h4>Followers:</h4>
                        <span>34</span>
                        <i>.</i>
                    </div>
                    <div className="user-info">
                        <h4>Following:</h4>
                        <span>34</span>
                        <i>.</i>
                    </div>
                    <div className="user-info">
                        <img src={starIcon} alt="Starred" />
                        <h4>Starred:</h4>
                        <span>34</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
            <S.WrapperInfoUserSocial>
                <div>
                    <img src={starIcon} alt="" />
                    <span>Sorocaba - SP</span>
                </div>
                <div>
                    <img src={starIcon} alt="" />
                    <span>@BrHCastro</span>
                </div>
            </S.WrapperInfoUserSocial>
        </S.Wrapper>
    )
}
