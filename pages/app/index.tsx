import type { NextPage } from 'next'
import Connector from '../../components/connector'
import Bridge from '../../components/bridge'
import styles from '../../styles/App.module.css'


const App: NextPage = () => {
  return (
    <div className={styles.container}>
      <Connector/>
      <Bridge/>
    </div>
  )
}

export default App
