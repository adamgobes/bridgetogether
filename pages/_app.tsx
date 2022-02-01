import '../styles/globals.css'
import '../styles/fonts-dm.css';
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

function BridgeItApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default BridgeItApp
