import { Link } from "react-router-dom";

const FilmList = (props) => {
  console.log(props);
  if (!props.films) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.films.map((film, index) => (
          <div key={index}>
            <Link to={`/films/${index}`}>{film.title}</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default FilmList;
