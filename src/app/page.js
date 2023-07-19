import Card from "@/app/components/Card";
import Link from "next/link";
import Pagination from "./components/Pagination";

async function getData(page) {
  try {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?page=${page}`,
      {
        cache: "no-cache",
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("some error occurred");
  }
}

export default async function Home({ searchParams }) {
  console.log(searchParams);
  const mov = await getData(searchParams.page);
  console.log(mov);
  const totalMovies = mov?.data?.movie_count;
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
        {mov?.data?.movies?.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="text-white flex items-center justify-center py-6">
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          totalPages={totalPages}
          url={`/`}
        />
      </div>
    </>
  );
}
