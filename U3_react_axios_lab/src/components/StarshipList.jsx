const StarshipList = (props) => {
  console.log(props);
  if (!props.starships) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.starships.map((starship) => (
          <div key={starship.name}>
            <h3>{starship.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default StarshipList;
