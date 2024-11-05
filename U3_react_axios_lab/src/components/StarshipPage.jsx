import { useParams } from "react-router-dom";

const StarshipPage = (props) => {
  const { starshipId } = useParams();
  console.log("Starship ID:", starshipId);
  const index = Number(starshipId); //Got this from ChatGPT and altered below according to ChatGPT (prior it looked similar to the PokemonList code format from the lesson.)
  console.log("Starships in StarshipPage:", props.starships[index]);
  const singleStarship = props.starships[index];

  if (!singleStarship) return <p>Loading...</p>;

  return (
    <>
      <h2>{singleStarship.name}</h2>
      <dl>
        <dt>Model:</dt>
        <dd>{singleStarship.model}</dd>
        <dt>Manufacturer:</dt>
        <dd> {singleStarship.manufacturer}</dd>
      </dl>
    </>
  );
};

export default StarshipPage;
