import Head from 'next/head';
import Abilities from '../components/Abilities';
import styles from '../styles/Home.module.css';

export default function Home({ abilities }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Jaimish Trivedi</title>
			</Head>

			<Abilities abilities={abilities} />
		</div>
	);
}

export const getStaticProps = () => {

	const abilities = [
		"Learner",
		"Coder",
		"Gamer",
		"Reader"
	];

	return {
		props: {
			abilities,
		},
	};
};