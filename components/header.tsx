import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <span className={styles.logo}>
      <img alt="BridgeIt logo" src="/bridgeit-logo.png"/>
    </span>
  )
}

export default Header
