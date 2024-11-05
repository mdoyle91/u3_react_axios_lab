const StarshipList = (props) => {
  console.log(props);
  if (!props.starships) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.starships.map((starship) => (
          <div key={starship.name}>
            <Link to={`/starships/${index}`}>{starship.name}</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default StarshipList;
