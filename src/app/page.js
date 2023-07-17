import Card from "@/app/components/Card";

async function getData() {
  try {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json", {
      cache: "no-cache",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("some error occurred");
  }
}

export default async function Home() {
  const mov = await getData();
  return (
    <>
      <div className="my-5 px-3 grid items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {mov?.data?.movies?.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
