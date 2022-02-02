import styles from './Notification.module.css'

export function Notification({ hash }: { hash: string }) {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.alertWrapper} ${!!hash ? styles.alertWrapperOpen : styles.alertWrapperClosed}`}>
                tx successful view on etherscan <a className={styles.link} href={`https://kovan.etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer">here</a>
            </div>
        </div>
    )
} 