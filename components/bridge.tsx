import { ethers } from 'ethers';
import { useCallback, useState } from 'react';
import { useContractWrite } from 'wagmi';
import styles from '../styles/Bridge.module.css'
import { Button } from './Button'

const bridgeTogetherABI = ''

const Bridge = () => {
    const [eth, setEth] = useState<string>('');

    const [{ data, error, loading }, write] = useContractWrite(
        {
            addressOrName: process.env.NEXT_PUBLIC_BRIDGE_TOGETHER_CONTRACT!,
            contractInterface: bridgeTogetherABI,
        },
        'bridge',
        {
            args: []
        }
    )

    const bridge = useCallback(() => {
        write({ overrides: { value: ethers.utils.parseEther(eth) } })
    }, [write, eth])

    return (
        <div className={styles.container}>
            <div className={styles.source}>
                <span className={styles.networkETH}>
                    From Ethereum
                </span>
                <input type="text" placeholder="0 ETH" className={styles.input} onChange={e => setEth(e.target.value)} />
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
                <Button onClick={bridge}>Transfer</Button>
            </div>
        </div>
    )
}

export default Bridge
