import { useRouter } from "next/router";
import { pixels } from "../mock/mock";

export default function Map() {
  const router = useRouter()
  const { ref } = router.query
  const mapInfos = pixels.find((mapa) => mapa.name === ref)

  if (!mapInfos) return <p>Opss... Parece que algo deu errado! <br /> Que tal voltar para onde estava? <a href="/">Home</a></p>
  return (
    <>
      {mapInfos.agents.map((agent, i) => (
        <div key={i}>
          <a>
            <img src={agent.agent_img} />
            <p>{agent.name}</p>
          </a>
        </div>
      ))}
    </>
  )
}