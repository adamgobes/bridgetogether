import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Button } from '../components/Button'
import { useFeedsSaved } from '../lib/useFeedsSaved'
import { Marquee } from '../components/Marquee'

const Home: NextPage = () => {
  const feesSaved = useFeedsSaved()

  return (
    <div>
      <div className={styles.contentWrapper}>
        <div className={styles.leftSide}>
          <h1>Start saving money today by bridging together</h1>
          <p>Gas fees are super high and it takes even more to cross the bridge, let&apos;s bridge together?</p>
          <div className={styles.buttonWrapper}>
            <a href="/app">
                <Button>Launch App</Button>
            </a>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img alt="BridgeIt logo" src="/golden-eth.png" />
        </div>
      </div>
      <div className={styles.marqueeFooter}>
        <Marquee messages={
          feesSaved.map(f => `${f.address.substring(0, 7)}... SAVED $${f.saved}`)
        } />
      </div>
    </div>
  )
}

export default Home
