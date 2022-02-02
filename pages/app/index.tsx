import type { NextPage } from 'next'
import Connector from '../../components/connector'
import Bridge from '../../components/bridge'
import styles from '../../styles/App.module.css'
import { Notification } from '../../components/Notification'
import { useState } from 'react'


const App: NextPage = () => {
  const [tx, setTx] = useState<string>('')

  return (
    <div className={styles.container}>
      <Notification hash={tx} />
      <Connector />
      <Bridge setTx={setTx} />
    </div>
  )
}

export default App
