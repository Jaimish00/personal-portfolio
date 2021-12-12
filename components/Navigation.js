import React from 'react';
import styles from '../styles/Navigation.module.css';
import Link from 'next/link';
import Logo from './Logo';

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<Logo />
			<ul>
				<li className={styles.link_hover_effect}>
					<Link href='/blog'>
						<a>Blogs</a>
					</Link>
				</li>

				<li className={styles.link_hover_effect}>
					<Link href='/product'>
						<a>Products</a>
					</Link>
				</li>

				<li className={styles.link_hover_effect}>
					<Link href='/docs'>
						<a>Docs</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
