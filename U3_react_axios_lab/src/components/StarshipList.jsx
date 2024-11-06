import { Link } from "react-router-dom";

const StarshipList = (props) => {
  if (!props.starships) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.starships.map((starship, index) => (
          <div key={index}>
            <Link to={`/starships/${index}`}>{starship.name}</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default StarshipList;
