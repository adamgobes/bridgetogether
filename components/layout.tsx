import MetaHead from './metahead'
import Header from './header'
import Footer from './footer'
import styles from '../styles/Layout.module.css'
import Connector from '../components/connector'
import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

// Chains for connectors to support
const chains = defaultChains

// Set up connectors
const connectors = ({ chainId } : any) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0]
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
  ]
}

export default function Layout({ children } : any) {
  return (
    <Provider autoConnect connectors={connectors}>
      <div className={styles.container}>
        <MetaHead/>
        <main className={styles.main}>
          <Header/>
          {children}
        </main>

        <Footer/>

      </div>
    </Provider>
  )
}
