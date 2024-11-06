import { useParams } from "react-router-dom";

const FilmPage = (props) => {
  const { filmId } = useParams();

  const index = Number(filmId); //Got this from ChatGPT and altered below according to ChatGPT (prior it looked similar to the PokemonList code format from the lesson.)

  const singleFilm = props.films[index];

  if (!singleFilm) return <p>Loading...</p>;

  return (
    <>
      <h2>{singleFilm.title}</h2>
      <dl>
        <dt>Episode:</dt>
        <dd>{singleFilm.episode_id}</dd>
        <dt>Release Date:</dt>
        <dd> {singleFilm.release_date}</dd>
      </dl>
    </>
  );
};

export default FilmPage;
