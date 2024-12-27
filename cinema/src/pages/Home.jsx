import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const movieList = [
    { id: 1, title: "Thuppakki", release_date: "2012" },
    { id: 2, title: "Kaththi", release_date: "2014" },
    { id: 3, title: "Theri", release_date: "2017" },
    { id: 4, title: "Mersal", release_date: "2018" },
    { id: 5, title: "Master", release_date: "2021" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for Movies.."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
