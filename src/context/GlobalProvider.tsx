import React, { useState, useEffect, createContext, ReactNode } from "react";
import { api } from "../services/api";

interface GlovalProviderProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
}

export const GlobalContext = createContext({} as GlovalProviderProps);

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

const GlobalProvider: React.FC = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <GlobalContext.Provider
      value={{
        movies,
        selectedGenre,
        handleClickButton,
        selectedGenreId,
        genres,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export default GlobalProvider;
