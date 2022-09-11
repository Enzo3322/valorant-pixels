import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export const PixelsList = ({ pixelArr }) => {
	const [search, setSearch] = useState('');
	const [filteredPixels, setFilteredPixels] = useState([]);

	useEffect(() => {
		if (pixelArr) {
			const filter = pixelArr?.filter((pixel) =>
				pixel?.name.toLowerCase().includes(search.toLowerCase())
			);
			setFilteredPixels(filter);
		} else {
			setFilteredPixels(pixelArr);
		}
	}, [search]);

	if (!pixelArr) return null;

	return (
		<>
			<div className={styles.searchContainer}>
				<input
					type="text"
					placeholder="Buscar mapa..."
					className={styles.search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<section className={styles.grid}>
				{filteredPixels?.map((item, i) => (
					<a key={i} href={`/map?ref=${item.name}`}>
						<picture>
							<img src={item?.thumb?.url} alt={item?.thumb?.alt} />
						</picture>
						<p className={styles.name}>{item.name}</p>
					</a>
				))}
				{filteredPixels.length === 0 && <h2>Nenhum mapa encontrado</h2>}
			</section>
		</>
	);
};
