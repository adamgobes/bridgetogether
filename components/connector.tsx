import { useAccount, useConnect } from 'wagmi'
import Image from 'next/image'
import styles from '../styles/Connector.module.css'

const getReadyStatus = (readyStatus: any): string => {
  if (readyStatus === undefined) {
    return 'unclear'
  } else if (readyStatus === true) {
    return 'yes'
  } else if (readyStatus === false) {
    return 'no'
  } else {
    return 'wut'
  }
}

const Connector = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })

  if (accountData) {
    return (
      <div>
        <div>Connected to {accountData && accountData.connector && accountData.connector.name}</div>
        <div>
            As {accountData.address}
        </div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    )
  } else {
    // Cheating here...coinbaseConnector could be undefined here!
    var coinbaseConnector = connectData.connectors.find((c) => c.name === 'Coinbase Wallet')!;
    return (
      <div className={styles.container} onClick={() => connect(coinbaseConnector)}>
          <p className={styles.copyContainer}>
              <span className={styles.title}>
                Coinbase Wallet
              </span>
              <span className={styles.copy}>
                Connect using Coinbase wallet
              </span>
          </p>
          {connectError && <div>{connectError?.message ?? 'Failed to connect'}</div>}
      </div>
    )
  }
}

export default Connector
