import React, { createContext, useCallback, useState } from 'react'
import { githubApi } from '../services/api'

//Tipando os dados que quero para o usuário
type GitHubUser = {
    loading: boolean,
    hasGitHubUser: boolean,
    user: {
        login: string
        name: string
        html_url: string
        avatar_url: string
        location: string
        twitter_username: string
        bio: string
        followers: number
        following: number
        public_gists: number
        public_repos: number
    }

    repositories: string[]
    starred: string[]
}

//Tipando as Props do contexto
type PropsGitHubUserContext = {
    gitHubState: GitHubUser
    setGitHubState: React.Dispatch<React.SetStateAction<GitHubUser>>
}

//Valor default do contexto
const DEFAULT_VALUES = {
    gitHubState: {
        loading: false,
        hasGitHubUser: false,
        user: {
            login: "Mariazinha",
            name: "Maria Joaquina",
            html_url: "https://github.com/BrHCastro",
            avatar_url: "",
            location: "Sorocabis",
            twitter_username: "Twitão",
            bio: "loren ipsunloren ipsunloren ipsunloren ipsunloren ipsunloren ipsunloren ipsun",
            followers: 35,
            following: 32,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [""],
        starred: [""]
    },
    setGitHubState: () => { },
    getGitHubUser: () => { }
}

//Criando o contexto
const GitHubUserContext = createContext<PropsGitHubUserContext>(DEFAULT_VALUES)

const GitHubUserContextProvider: React.FC = ({ children }) => {
    const [gitHubState, setGitHubState] = useState(DEFAULT_VALUES.gitHubState)

    const getGitHubUser = (gitHubUserName: string) => {


        setGitHubState(prevState => ({
            ...prevState, loading: !prevState.loading
        }))

        githubApi.get(`users/${gitHubUserName}`)
            .then(({ data }: any) => {

                setGitHubState(prevState => ({
                    ...prevState,
                    hasGitHubUser: true,
                    user: {
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        avatar_url: data.avatar_url,
                        location: data.location,
                        twitter_username: data.twitter_username,
                        bio: data.bio,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    }
                }))
            }).finally(() => {
                setGitHubState(prevState => ({
                    ...prevState, loading: !prevState.loading
                }))
            })
    }

    const contextValues = {
        gitHubState,
        getGitHubUser: useCallback((gitHubUserName) => getGitHubUser(gitHubUserName), []),
        setGitHubState
    }
    return (
        <GitHubUserContext.Provider
            value={contextValues}
        >
            {children}
        </GitHubUserContext.Provider>
    )
}

export { GitHubUserContextProvider }
export { GitHubUserContext }