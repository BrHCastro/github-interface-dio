import { Layout } from './components/Layout'
import { Profile } from './components/Profile'
import { Repos } from './components/Repos'
import { useGitHub } from './hooks/GitHubHooks'
import { NoSearch } from './components/NoSearch'
import { Loading } from './components/Loading'

import { Toaster } from 'react-hot-toast';

function App() {

  const { gitHubState } = useGitHub()

  return (
    <Layout>
      <>
        {gitHubState.hasGitHubUser && gitHubState.wasFound ? (
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
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontFamily: 'Lato',
            }
          }}
          containerStyle={{
            top: 70,
          }}
        />
      </>
    </Layout>
  )
}

export default App;
