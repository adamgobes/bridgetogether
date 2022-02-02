import { useCallback, useState } from 'react';
import styles from '../styles/StatusWatcher.module.css'
import Image from 'next/image'
import { Button } from './Button'

const StatusWatcher = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
            Transaction Status
        </h1>
        <div className={styles.detailsContainer}>
            <div className={styles.detail}>
                <span className={styles.name}>
                    Token
                </span>
                <span className={styles.tokenETH}>
                    ETH
                </span>
            </div>
            <div className={styles.detail}>
                <span className={styles.name}>
                    Amount transferred
                </span>
                <span className={styles.amount}>
                    1.2 ETH
                    <span className={styles.usdConversion}>$3,317.45</span>
                </span>
            </div>
            <div className={styles.detail}>
                <span className={styles.name}>
                    Cost of gas
                </span>
                <span className={styles.gasCost}>
                    $200.1
                </span>
            </div>
            <div className={styles.detail}>
                <span className={styles.name}>
                    Timer
                </span>
                <span className={styles.timer}>
                    00:14
                </span>
            </div>
        </div>
        <div className={styles.progressBar}>
            <Image src="/static-progress-tracker.png" width="824" height="80" />
        </div>
        <div className={styles.buttonContainer}>
          <Button>View on Etherscan</Button>
        </div>
        <div className={styles.transferFee}>
            Transfer Fee: ~0.00036 ETH
        </div>
        <div className={styles.savings}>
            It’s 0.000576 ETH without BridgeIt, you’re saving 60% 🎉
        </div>
      </div>
    )
}

export default StatusWatcher
