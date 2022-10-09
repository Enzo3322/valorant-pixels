import { useRouter } from 'next/router';
import { useState } from 'react';
import { pixels } from '../mock/mock';
import styles from '../styles/agent.module.scss';

export default function Pixel() {
	const router = useRouter();
	if (!pixels) return null;

	const { map, agent } = router.query;

	const matchMap = pixels?.find(
		(pixel) => pixel?.name.toLowerCase() === map?.toLowerCase()
	);

	const matchAgent = matchMap?.agents.find(
		(agentName) => agentName.name === agent
	);

	if (!matchAgent) return <p>Ops temos um problema</p>;
	return (
		<div>
			<picture>
				<img src={matchAgent.agent_img} alt={matchAgent.name} />
			</picture>
			<div className={styles.pixelsContainer}>
				{matchAgent.pixels?.map((pixel, i) => {
					return (
						<div className={styles.pixelsContent} key={i}>
							<span className={styles.flag}>{pixel.level}</span>
							<p>{pixel.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
