const StarshipList = (props) => {
  if (!props.starships) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.starships.map((starship) => (
          <div key={starship.name}>
            <h1>{starship.name}</h1>
          </div>
        ))}
      </div>
    );
  }
};

export default StarshipList;
