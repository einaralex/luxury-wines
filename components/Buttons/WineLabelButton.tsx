import cx from 'classnames';
import RootButton from './RootButton';
import styles from '../assets/Buttons.module.css';

type CompanyName =
  | 'pol-couronne'
  | 'giacomo-grimaldi'
  | 'col-di-lamo'
  | 'monte-rossa'
  | 'feudo-maccari'
  | 'tenuta-sette-ponti';

const WineLabelButton = ({ link, type, title, id }) => (
  <div className={styles.wrapper}>
    <div className={styles.typepill}>{type}</div>
    <a href={link} className={styles.anchor}>
      <RootButton className={cx(styles.label, styles[id])}>
        {/* <img className={styles.paperBackground}/> */}
        {title}
      </RootButton>
    </a>
  </div>
);

export { WineLabelButton };
