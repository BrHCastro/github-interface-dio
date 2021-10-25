import { Layout } from './components/Layout'
import { Profile } from './components/Profile'
import { Repos } from './components/Repos'
import { useGitHub } from './hooks/GitHubHooks'


function App() {

  const { gitHubState } = useGitHub()

  return (
    <Layout>
      <>
        {gitHubState.hasGitHubUser ? (
          <>
            {gitHubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repos />
              </>
            )}
          </>
        ) : (
          <p>Olá</p>
        )}
      </>
    </Layout>
  )
}

export default App;
