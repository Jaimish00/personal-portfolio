import React from 'react';
import styles from '../styles/Abilities.module.scss';

const Abilities = ({ abilities = [] }) => {
	return (
		<section>
			<ul className={styles.ul}>
				{abilities.map((ability) => (
					<li key={ability} className={styles.li}>
						{ability}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Abilities;
