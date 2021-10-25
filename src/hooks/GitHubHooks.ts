import { useContext } from "react"
import { GitHubUserContext } from '../providers/GitHubProvider'

export const useGitHub = () => {
    const { gitHubState, getGitHubUser }:any = useContext(GitHubUserContext)
    return { gitHubState, getGitHubUser }
}