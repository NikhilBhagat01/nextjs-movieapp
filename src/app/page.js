import Card from "@/components/Card";

async function getData() {
  const res = await fetch("https://yts.mx/api/v2/list_movies.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const mov = await getData();
  console.log(mov.data.movies[0]);
  return (
    <>
      <div className="my-5 px-3 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {mov.data.movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
