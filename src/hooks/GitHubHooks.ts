import { useContext } from "react"
import { GitHubUserContext } from '../providers/GitHubProvider'

export const useGitHub = () => {
    const { gitHubState, getGitHubUser, getGitHubRepos, getGitHubStarred }:any = useContext(GitHubUserContext)
    return { gitHubState, getGitHubUser, getGitHubRepos, getGitHubStarred }
}