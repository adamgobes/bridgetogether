import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useContractWrite } from 'wagmi';
import styles from '../styles/Bridge.module.css'
import { Button } from './Button'

const bridgeTogetherABI = [
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_ovmL1StandardBridge",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "accountAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "LogBalance",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "accountAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "LogDeposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "accountAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "LogWithdraw",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "destination",
                "type": "address"
            }
        ],
        "name": "bridge",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ovmL1StandardBridge",
        "outputs": [
            {
                "internalType": "contract L1StandardBridge",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]

const Bridge = ({ setTx }: { setTx: (tx: string) => void }) => {
    const [eth, setEth] = useState<string>('');

    const [{ data, error, loading }, write] = useContractWrite(
        {
            addressOrName: '0xfe3b0c57a0a31b8b9ab02beb504d204e2aeb4f5c',
            contractInterface: bridgeTogetherABI,
        },
        'deposit',
        {
            args: []
        }
    )

    useEffect(() => {
        if (!data) return
        setTx(data.hash)
        setTimeout(() => setTx(''), 5000)
    })

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
                <Button onClick={bridge} loading={loading}>Transfer</Button>
            </div>
        </div>
    )
}

export default Bridge
