import Head from 'next/head';
import { PixelsList } from '../components/PixelsList';
import styles from '../styles/Home.module.css';
import { pixels } from '../mock/mock';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Welcome to Valorant Pixels Plataform</h1>
				<PixelsList pixelArr={pixels} />
			</main>
		</div>
	);
}
