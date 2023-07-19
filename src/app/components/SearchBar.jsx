"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const allGenres = [
    "All",
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short Film",
    "Sport",
    "Superhero",
    "Thriller",
    "War",
    "Western",
  ];
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}&genre=${genre}`);
  };

  return (
    <div className="bg-[#171717] p-5 md:mx-[-190px]">
      <form
        onSubmit={handleSubmit}
        className="w-full md:max-w-2xl mx-auto flex flex-col md:items-center justify-center md:flex-row  gap-4"
      >
        <input
          type="text"
          placeholder="search for a movie"
          className="p-2 bg-[#282828] text-gray-200"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label className="text-gray-300" htmlFor="">
          Genre :
        </label>
        <select
          className="p-2 bg-[#282828] text-gray-200"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          name="genre"
          id="gen"
        >
          {allGenres.map((g, i) => (
            <option key={i}>{g}</option>
          ))}
        </select>
        <button
          type="submit"
          className="p-2 bg-[#32323a] transition-all duration-300 rounded-md text-white hover:bg-[#6ac045]"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
