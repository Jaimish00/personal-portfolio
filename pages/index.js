import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Jaimish Trivedi</title>
			</Head>

			

			<main className={styles.main}>
				<h1 className={styles.h1}>Hello World! Welcome to Jaimish's Portfolio</h1>
			</main>
		</div>
	);
}
