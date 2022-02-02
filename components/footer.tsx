import { useFeedsSaved } from '../lib/useFeedsSaved'
import styles from '../styles/Footer.module.css'
import { Marquee } from './Marquee'

const Footer = () => {
  const feesSaved = useFeedsSaved()

  return (
    <div className={styles.marqueeFooter}>
      <Marquee messages={
        feesSaved.map(f => `${f.address.substring(0, 7)}… SAVED $${f.saved}`)
      } />
    </div>
  )
}

export default Footer
