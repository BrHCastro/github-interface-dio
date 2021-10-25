import { useState } from 'react'
import { useGitHub } from '../../hooks/GitHubHooks'
import * as S from './styled'

export function Header() {
    const [ gitHubUserNameForSearch, setGitHubUserNameForSearch ]= useState<any>(undefined)
    const { getGitHubUser } = useGitHub()

    function submitGetGitHubUser() {
        if (gitHubUserNameForSearch) {
            return getGitHubUser(gitHubUserNameForSearch)
        }

        return
    }

    return (
        <header>
            <S.Wrapper>
                <input 
                    type="text"
                    placeholder="Enter a username"
                    onChange={(event) => setGitHubUserNameForSearch(event.target.value) }
                />
                <button type="submit" onClick={submitGetGitHubUser}>
                    Search
                </button>
            </S.Wrapper>
        </header>
    )
}
