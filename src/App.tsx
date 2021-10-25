import { Layout } from './components/Layout'
import { Profile } from './components/Profile'
import { Repos } from './components/Repos'
import { useGitHub } from './hooks/GitHubHooks'
import { NoSearch } from './components/NoSearch'
import { Loading } from './components/Loading'


function App() {

  const { gitHubState } = useGitHub()

  return (
    <Layout>
      <>
        {gitHubState.hasGitHubUser ? (
          <>
            {gitHubState.loading ? (
              <Loading />
            ) : (
              <>
                <Profile />
                <Repos />
              </>
            )}
          </>
        ) : (
          <NoSearch />
        )}
      </>
    </Layout>
  )
}

export default App;
