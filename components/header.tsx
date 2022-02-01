import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <Link href="/" passHref>
      <span className={styles.logo}>
        <Image alt="BridgeIt logo" src="/bridgeit-logo.png" width="127" height="29"/>
      </span>
    </Link>
  )
}

export default Header
