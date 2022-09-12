import { useRouter } from 'next/router';
import { pixels } from '../mock/mock';

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
			<p>{matchAgent.name}</p>
			<ul>
				{matchAgent.pixels?.map((pixel, i) => (
					<p key={i}>{pixel.description}</p>
				))}
			</ul>
		</div>
	);
}
