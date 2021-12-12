import React from 'react';
import styles from '../styles/Navigation.module.css';
import Link from 'next/link';

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<div className='logo-container'>
				<Link href='/'>
					<a>Sample Logo</a>
				</Link>
			</div>
			<ul>
				<li>
					<Link href='/blog'>
						<a>Blogs</a>
					</Link>
				</li>

				<li>
					<Link href='/product'>
						<a>Products</a>
					</Link>
				</li>

				<li>
					<Link href='/docs'>
						<a>Docs</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
