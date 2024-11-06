import { useParams } from "react-router-dom";

const PlanetPage = (props) => {
  const { planetId } = useParams();

  const index = Number(planetId); //Got this from ChatGPT and altered below according to ChatGPT (prior it looked similar to the PokemonList code format from the lesson.)

  const singlePlanet = props.planets[index];

  if (!singlePlanet) return <p>Loading...</p>;

  return (
    <>
      <h2>{singlePlanet.name}</h2>
      <dl>
        <dt>Climate:</dt>
        <dd>{singlePlanet.climate}</dd>
        <dt>Population:</dt>
        <dd> {singlePlanet.population}</dd>
      </dl>
    </>
  );
};

export default PlanetPage;
