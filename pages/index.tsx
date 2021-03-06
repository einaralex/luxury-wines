import Head from 'next/head';
import { WineLabelButton } from '../components/Buttons';
import { ButtonGroup } from '../components/Buttons';
import styles from '../styles/Home.module.css';

export default function Home() {
  const wines = {
    'pol-couronne': {
      title: 'Pol Couronne',
      from: 'Reims',
      type: 'Kampavín',
      link: 'https://www.champagne-polcouronne.com/?lang=en',
    },
    'giacomo-grimaldi': {
      title: 'Giacomo Grimaldi',
      from: 'Piemonte',
      type: 'Rauðvín & hvítvín',
      link: 'http://www.giacomogrimaldi.com/',
    },
    'col-di-lamo': {
      title: 'Col Di Lamo',
      from: 'Brunello di Montalicino',
      type: 'Rauðvín',
      link: 'http://coldilamodigiovannaneri.squarespace.com/',
    },
    'monte-rossa': {
      title: 'Monte Rossa',
      from: 'Lombardia',
      type: 'Franciacorta / freyðivín',
      link: 'https://www.monterossa.com/en/',
    },
    'feudo-maccari': {
      title: 'Feudo Maccari',
      from: 'Sikiley',
      type: 'Hvítvín',
      link: 'https://www.feudomaccari.it/en/',
    },
    'tenuta-sette-ponti': {
      title: 'Tenuta Sette Ponti',
      from: ' Toscana',
      type: 'Hvítvín',
      link: 'https://www.tenutasetteponti.it/tenutasetteponti/en/vini/',
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Luxury wines</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <img className={styles.background} />
        <h1>Luxury wines</h1>
        <ButtonGroup>
          {Object.entries(wines).map((wine) => (
            <WineLabelButton
              id={wine[0]}
              key={wine[0]}
              title={wine[1].title}
              from={wine[1].from}
              type={wine[1].type}
              link={wine[1].link}
            />
          ))}
        </ButtonGroup>
        <a className={styles.email} href="mailto:info@luxurywines.is">
          info@luxurywines.is
        </a>
      </main>
    </div>
  );
}
