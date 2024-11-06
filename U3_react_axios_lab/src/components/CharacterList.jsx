import { Link } from "react-router-dom";

const CharacterList = (props) => {
  console.log(props);
  if (!props.characters) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.characters.map((character, index) => (
          <div key={index}>
            <Link to={`/characters/${index}`}>{character.name}</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default CharacterList;
