import Head from "next/head";
import { WineLabelButton } from "../components/Buttons";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luxury wines</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <img className={styles.background}/>
        <h1>Luxury wines</h1>
        <WineLabelButton companyName="pol-couronne" />
        <WineLabelButton companyName="giacomo-grimaldi"/>
        <WineLabelButton companyName="col-di-lamo"/>
        <a className={styles.email} href="mailto:info@luxurywines.is">info@luxurywines.is</a>
      </main>
    </div>
  );
}
