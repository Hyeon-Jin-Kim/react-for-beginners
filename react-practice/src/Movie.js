import PropTypes from "prop-types";

function Movie({ title, mediumCoverImage, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={mediumCoverImage} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.PropTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
