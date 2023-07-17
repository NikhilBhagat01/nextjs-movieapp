import Link from "next/link";

async function getData() {
  const res = await fetch("https://yts.mx/api/v2/list_movies.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const test = () => {
  //    const movies = await getData();
  return (
    <>
      <input
        type="text"
        name="search"
        className="border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-400 focus:outline-none px-4 py-2 mt-2"
      />
      <div>
        {movies.data.movies.map((movie) => (
          <p key={movie.id}>
            <Link href={`/search/${movie.id}`}>{movie.title}</Link>
          </p>
        ))}
      </div>
    </>
  );
};
