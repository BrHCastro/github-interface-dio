import { useEffect, useState } from 'react'
import { useGitHub } from '../../hooks/GitHubHooks'
import { RepositoryItems } from '../RepoItems'
import * as S from './styled'

export function Repos() {

    const { gitHubState, getGitHubRepos, getGitHubStarred } = useGitHub()
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

    useEffect(() => {

        if (!!gitHubState.user.login) {
            getGitHubRepos(gitHubState.user.login)
            getGitHubStarred(gitHubState.user.login)
        }

        setHasUserForSearchRepos(!!gitHubState.repositories)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ gitHubState.user.login ])

    return (
        <>
            {hasUserForSearchRepos ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.66667 14V15.6667L6.66667 14.3333L4.66667 15.6667V14H4.33333C3.71449 14 3.121 13.7542 2.68342 13.3166C2.24583 12.879 2 12.2855 2 11.6667V3.33333C2 2.8029 2.21071 2.29419 2.58579 1.91911C2.96086 1.54404 3.46957 1.33333 4 1.33333H13.3333C13.5101 1.33333 13.6797 1.40357 13.8047 1.52859C13.9298 1.65361 14 1.82318 14 1.99999V13.3333C14 13.5101 13.9298 13.6797 13.8047 13.8047C13.6797 13.9298 13.5101 14 13.3333 14H8.66667ZM4.66667 12.6667V11.3333H8.66667V12.6667H12.6667V10.6667H4.33333C4.06812 10.6667 3.81376 10.772 3.62623 10.9596C3.43869 11.1471 3.33333 11.4014 3.33333 11.6667C3.33333 11.9319 3.43869 12.1862 3.62623 12.3738C3.81376 12.5613 4.06812 12.6667 4.33333 12.6667H4.66667ZM4.66667 3.33333V4.66666H6V3.33333H4.66667ZM4.66667 5.33333V6.66666H6V5.33333H4.66667ZM4.66667 7.33333V8.66666H6V7.33333H4.66667Z" fill="#57606A" />
                            </svg>
                            Repositories
                        </S.WrapperTab>
                        <S.WrapperTab>
                            <svg width="52" height="50" viewBox="0 0 52 50" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.8843 18.925C51.6061 18.0637 50.8663 17.436 49.9758 17.306L34.8739 15.098L28.1199 1.32616C27.7217 0.514162 26.8998 0 26 0C25.1001 0 24.2782 0.514162 23.8801 1.32616L17.1266 15.0979L2.02418 17.3058C1.13371 17.436 0.393763 18.0637 0.11575 18.9249C-0.162264 19.7862 0.0695715 20.7316 0.714014 21.3636L11.6421 32.0817L9.06135 47.2189C8.90926 48.1115 9.2738 49.0134 10.0018 49.5456C10.4136 49.8468 10.9014 50 11.3915 50C11.7677 50 12.1455 49.9098 12.4914 49.7267L25.9998 42.5806L39.5081 49.7267C39.8561 49.9109 40.2372 49.9986 40.6146 50C41.9188 49.9981 42.9754 48.9338 42.9754 47.6211C42.9754 47.4384 42.9549 47.2603 42.9161 47.0895L40.3577 32.0819L51.2858 21.3636C51.9304 20.7316 52.1623 19.7862 51.8843 18.925Z" fill="#57606A" />
                            </svg>
                            Starred
                        </S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {gitHubState.repositories.map((repo: { id: string, name: string, description: string, full_name: string, html_url: string }) => (
                                <RepositoryItems
                                    key={parseInt(repo.id)}
                                    nameRepo={repo.name}
                                    description={repo.description}
                                    fullNameRepo={repo.full_name}
                                    linkToRepo={repo.html_url}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {gitHubState.starred.map((repo: { id: string, name: string, description: string, full_name: string, html_url: string }) => (
                                <RepositoryItems
                                    key={parseInt(repo.id)}
                                    nameRepo={repo.name}
                                    fullNameRepo={repo.full_name}
                                    description={repo.description}
                                    linkToRepo={repo.html_url}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                <></>
            )}
        </>
    )
}
