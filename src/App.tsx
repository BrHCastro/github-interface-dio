import { Layout } from './components/Layout'
import { Profile } from './components/Profile'
import { ResetCss } from './global/resetCSS'
import { Repos } from './components/Repos'

function App() {
  return (
    <main>
      <ResetCss/>
      <Layout>
        <Profile />
        <Repos/>
      </Layout>
    </main>
  );
}

export default App;
