import type { NextPage } from 'next'
import Connector from '../../components/connector'
import styles from '../../styles/App.module.css'


const App: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>
        App page
      </h1>
      <h2>Connect Wallet &rarr;</h2>
      <Connector/>
    </div>
  )
}

export default App
