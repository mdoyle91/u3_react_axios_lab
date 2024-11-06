import { Link } from "react-router-dom";

const PlanetList = (props) => {
  if (!props.planets) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.planets.map((planet, index) => (
          <div key={index}>
            <Link to={`/planets/${index}`}>{planet.name}</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default PlanetList;
