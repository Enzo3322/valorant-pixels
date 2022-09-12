import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { pixels } from '../mock/mock';
import styles from '../styles/map.module.scss';

export default function Map() {
	const router = useRouter();
	const { ref } = router.query;
	const mapInfos = pixels.find((mapa) => mapa.name === ref);

	const [search, setSearch] = useState('');
	const [filteredAgents, setFilteredAgents] = useState(mapInfos?.agents);

	useEffect(() => {
		const filter = mapInfos?.agents?.filter((agent) =>
			agent?.name?.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredAgents(filter);
	}, [search, mapInfos]);

	if (!mapInfos) {
		return (
			<p>
				Opss... Parece que algo deu errado! <br /> Que tal voltar para onde
				estava? <Link href="/">Home</Link>
			</p>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.thumbContainer}>
				<h1>{mapInfos.name}</h1>
				<picture>
					<img src={mapInfos.thumb.url} alt={mapInfos.thumb.alt} />
				</picture>
			</div>
			<div className={styles.searchContainer}>
				<input
					type="text"
					placeholder="Pesquise pelo nome do seu agente..."
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className={styles.agentContainer}>
				{filteredAgents?.map((agent, i) => (
					<a key={i} href={`/pixel?map=${mapInfos.name}&agent=${agent.name}`}>
						<picture>
							<img src={agent.agent_img} alt="" />
						</picture>
						<p>{agent.name}</p>
					</a>
				))}
			</div>
		</div>
	);
}
