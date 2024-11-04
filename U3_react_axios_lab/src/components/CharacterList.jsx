const CharacterList = (props) => {
  console.log(props);
  if (!props.characters) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.characters.map((character) => (
          <div key={character.name}>
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default CharacterList;
