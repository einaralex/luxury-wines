import cx from 'classnames'
import RootButton from './RootButton'
import styles from '../assets/Buttons.module.css'

type CompanyName = "pol-couronne" | "giacomo-grimaldi" | "col-di-lamo";

const title = {
  "pol-couronne": "Pol Couronne",
  "giacomo-grimaldi": "Giacomo Grimaldi",
  "col-di-lamo": "Col Di Lamo",
}

const link = {
  "pol-couronne": "https://www.champagne-polcouronne.com/?lang=en",
  "giacomo-grimaldi": "http://www.giacomogrimaldi.com/",
  "col-di-lamo": "http://coldilamodigiovannaneri.squarespace.com/",
}

const WineLabelButton = ({ companyName}: { companyName: CompanyName }) => (
  <a href={link[companyName]} className={styles.anchor}>
    <RootButton className={cx(styles.label, styles[companyName])}>
      {/* <img className={styles.paperBackground}/> */}
      {title[companyName]}
    </RootButton>
  </a>
)

export { WineLabelButton }