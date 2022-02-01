import type { NextPage } from 'next'
import Connector from '../components/connector'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Button } from '../components/Button'
import { useFeedsSaved } from '../lib/useFeedsSaved'
import { Marquee } from '../components/Marquee'

const VERSION = 'v0.0.1 - pre-alpha';

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

const Home: NextPage = () => {
  const feesSaved = useFeedsSaved()

  return (
    <Provider autoConnect connectors={connectors}>
      <div className={styles.container}>
        <Head>
          <title>BridgeTogether - {VERSION}</title>
          <meta name="description" content="App written during Coinbase's SmartContract HackDays 2022" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main className={styles.main}>
          <img alt="BridgeIt logo" src="/bridgeit-logo.png" />
          <div className={styles.contentWrapper}>
            <div className={styles.leftSide}>
              <h1>Start saving money today by bridging together</h1>
              <p>Gas fees are super high and it takes even more to cross the bridge, let's bridge together?</p>
              <div className={styles.buttonWrapper}>
                <Button>Launch App</Button>
              </div>
            </div>
            <div className={styles.rightSide}>
              <img alt="BridgeIt logo" src="/golden-eth.png" />
            </div>
          </div>
        </main>
      </div>
      <div className={styles.marqueeFooter}>
        <Marquee messages={
          feesSaved.map(f => `${f.address.substring(0, 7)}... SAVED $${f.saved}`)
        } />
      </div>
    </Provider>
  )
}

export default Home
