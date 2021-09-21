import { useContext } from 'react';
import { MovieCard } from '../components/MovieCard';
import { GlobalContext } from '../context/GlobalProvider';

//       imdbID: string;


export function Content() {
  const { movies, selectedGenre } = useContext(GlobalContext);

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}