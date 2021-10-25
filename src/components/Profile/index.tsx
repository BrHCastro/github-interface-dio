import * as S from './styled'

import userIcon from '../../assets/images/users.svg'
import repoIcon from '../../assets/images/repository.svg'
import twitterIcon from '../../assets/images/twitter-icon.svg'
import locationIcon from '../../assets/images/location-icon.svg'

import { useGitHub } from '../../hooks/GitHubHooks'

export function Profile() {

    const { gitHubState } = useGitHub()

    return (
        <S.Wrapper>
            <S.WrapperImage src={ gitHubState.user.avatar_url } alt="User avatar" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{ gitHubState.user.name }</h1>
                    <a href={ gitHubState.user.html_url } target="_blank" rel="noreferrer">{ gitHubState.user.login }</a>
                </div>

                <S.WrapperStatusCount>
                    <img src={userIcon} alt="users icon" />
                    <div className="user-info">
                        <h4>Followers:</h4>
                        <span>{ gitHubState.user.followers }</span>
                        <i>.</i>
                    </div>
                    <div className="user-info">
                        <h4>Following:</h4>
                        <span>{ gitHubState.user.following }</span>
                        <i>.</i>
                    </div>
                    <div className="user-info">
                        <img src={ repoIcon } alt="Starred" />
                        <h4>Repos:</h4>
                        <span>{ gitHubState.user.public_repos }</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
            <S.WrapperInfoUserSocial>
                <div className="bio">
                    <span>{ gitHubState.user.bio }</span>
                </div>
                <div>
                    <img src={ locationIcon } alt="" />
                    <span>{ gitHubState.user.location }</span>
                </div>
                <div>
                    <img src={ twitterIcon } alt="Icone Twiter" />
                    <span>@{ gitHubState.user.twitter_username }</span>
                </div>
            </S.WrapperInfoUserSocial>
        </S.Wrapper>
    )
}
