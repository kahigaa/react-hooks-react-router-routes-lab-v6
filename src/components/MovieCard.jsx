import {Link} from 'react-router-dom';

function MovieCard({title,id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}   
        <linkk to={`/movie/${id}`}>View Info</linkk>
    </article>
  );
};

export default MovieCard;