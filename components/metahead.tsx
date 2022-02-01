import Head from 'next/head'

const VERSION = 'v0.0.1 - pre-alpha';

const MetaHead = () => {
  return (
    <Head>
      <title>BridgeTogether - {VERSION}</title>
      <meta name="description" content="App written during Coinbase's SmartContract HackDays 2022" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default MetaHead
