import { useContext } from 'react';
import { Button } from '../components/Button';
import { GlobalContext } from '../context/GlobalProvider';

export function SideBar() {
  const { handleClickButton, selectedGenreId, genres } = useContext(GlobalContext);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}