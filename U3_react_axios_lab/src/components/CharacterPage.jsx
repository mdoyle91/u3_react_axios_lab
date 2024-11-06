import { useParams } from "react-router-dom";

const CharacterPage = (props) => {
  const { characterId } = useParams();

  const index = Number(characterId); //Got this from ChatGPT and altered below according to ChatGPT (prior it looked similar to the PokemonList code format from the lesson.)

  const singleCharacter = props.characters[index];

  if (!singleCharacter) return <p>Loading...</p>;

  return (
    <>
      <h2>{singleCharacter.name}</h2>
      <dl>
        <dt>Mass:</dt>
        <dd>{singleCharacter.mass}</dd>
        <dt>Hair Color:</dt>
        <dd> {singleCharacter.hair_color}</dd>
      </dl>
    </>
  );
};

export default CharacterPage;
