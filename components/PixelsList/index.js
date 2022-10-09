import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export const PixelsList = ({ pixelArr }) => {
	if (!pixelArr) return null;

	return (
		<>
			<div className={styles.searchContainer}></div>
			<section className={styles.grid}>
				{pixelArr?.map((item, i) => (
					<a key={i} href={`/map?ref=${item.name}`}>
						<picture>
							<img src={item?.thumb?.url} alt={item?.thumb?.alt} />
						</picture>
						<p className={styles.name}>{item.name}</p>
					</a>
				))}
			</section>
		</>
	);
};
