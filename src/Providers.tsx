import App from './App'
import { ResetCss } from './global/resetCSS'
import { GitHubUserContextProvider } from './providers/GitHubProvider'

export function Providers() {
    return (
        <main>
            <GitHubUserContextProvider>
                <ResetCss />
                <App />
            </GitHubUserContextProvider>
        </main>
    )
}
