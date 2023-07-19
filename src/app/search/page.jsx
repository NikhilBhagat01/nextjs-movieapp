import React from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

async function getData(query, genre, page) {
  try {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${query}&genre=${genre}&page=${page}`,
      { cache: "no-cache" }
    );
    const movie = await res.json();

    return movie;
  } catch (error) {
    console.log("some error occurred");
  }
}

const Searchpage = async ({ searchParams }) => {
  const movie = await getData(
    searchParams.query,
    searchParams.genre,
    searchParams.page
  );

  const totalMovies = movie?.data?.movie_count;
  const moviePerPage = 20;

  const totalPages = Math.ceil(totalMovies / moviePerPage);

  let currentPage = 1;

  if (Number(searchParams.page)) {
    currentPage = Number(searchParams.page);
  }

  let pageNumbers = [];

  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="my-5 px-3 grid items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {movie?.data?.movies?.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="text-white flex items-center justify-center py-6">
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          totalPages={totalPages}
          url={`/search?query=${searchParams.query}&genre=${searchParams.genre}`}
        />
      </div>
    </>
  );
};

export default Searchpage;
