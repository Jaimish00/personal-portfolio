import React from 'react';
import Link from 'next/link';
import styles from '../styles/Logo.module.css';

const Logo = () => {
	return (
		<div className={styles.logo_container}>
			<Link href='/'>
				<a>Jaimish Trivedi</a>
			</Link>
		</div>
	);
};

export default Logo;
