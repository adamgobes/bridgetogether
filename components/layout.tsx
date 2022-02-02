import MetaHead from './metahead'
import Header from './header'
import Footer from './footer'
import styles from '../styles/Layout.module.css'
import Connector from '../components/connector'
import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { providers } from 'ethers'

// Chains for connectors to support
const chains = defaultChains

// Set up connectors
const connectors = ({ chainId }: any) => {
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

export default function Layout({ children }: any) {
  const provider = ({ chainId }: any) =>
    new providers.AlchemyProvider(chainId, '8O-E10g_g_gMgX4e-MfQVo27jH9xIuwl')

  return (
    <Provider autoConnect connectors={connectors} provider={provider}>
      <div className={styles.container}>
        <MetaHead />
        <main className={styles.main}>
          <Header />
          {children}
        </main>

        <Footer />

      </div>
    </Provider>
  )
}
