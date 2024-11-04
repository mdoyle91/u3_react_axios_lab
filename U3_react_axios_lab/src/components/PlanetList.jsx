const PlanetList = (props) => {
  console.log(props);
  if (!props.planets) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.planets.map((planet) => (
          <div key={planet.name}>
            <h3>{planet.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default PlanetList;
