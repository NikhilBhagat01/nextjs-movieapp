import React from "react";
import Card from "../components/Card";

async function getData() {
  try {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${searchParams.query}`,
      { cache: "no-cache" }
    );
    const movie = await res.json();

    return movie;
  } catch (error) {
    console.log("some error occurred");
  }
}

const Searchpage = async ({ searchParams }) => {
  const movie = await getData();

  return (
    <div className="my-5 px-3 grid items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {movie?.data?.movies?.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Searchpage;
