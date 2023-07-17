"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <div className="bg-[#171717] p-5 md:mx-[-190px]">
      <form
        onSubmit={handleSubmit}
        className="w-full md:max-w-sm mx-auto flex flex-col md:items-center justify-center md:flex-row  gap-4"
      >
        <input
          type="text"
          placeholder="search for a movie"
          className="p-2 bg-[#282828] text-gray-200"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label className="text-gray-300" htmlFor="">
          Genre
        </label>
        <select
          name=""
          id=""
          className="p-2 bg-[#282828] text-gray-200"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">all</option>
          <option value="comedy">comedy</option>
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
