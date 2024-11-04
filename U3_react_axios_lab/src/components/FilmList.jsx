const FilmList = (props) => {
  console.log(props);
  if (!props.films) {
    return <h1> Loading Please Wait </h1>;
  } else {
    return (
      <div>
        {props.films.map((film) => (
          <div key={film.title}>
            <h3>{film.title}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default FilmList;
