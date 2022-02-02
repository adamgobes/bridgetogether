import styles from '../styles/Bridge.module.css'
import { Button } from './Button'

const Bridge = () => {
  return (
    <div className={styles.container}>
        <div className={styles.source}>
            <span className={styles.networkETH}>
                From Ethereum
            </span>
            <input type="text" placeholder="0 ETH" className={styles.input}/>
            <div className={styles.estimateContainer}>
                <span className={styles.estimateLabel}>Estimated value</span>
                <span className={styles.estimateValue}>$0</span>
            </div>
        </div>
        <div className={styles.destination}>
            <span className={styles.networkOP}>
                To Optimism
            </span>
        </div>
        <div className={styles.buttonContainer}>
            <Button>Transfer</Button>
        </div>
    </div>
  )
}

export default Bridge
