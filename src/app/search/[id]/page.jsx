import Image from "next/image";

async function getData(id) {
  const res = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  );

  return res.json();
}

const page = async ({ params }) => {
  const single = await getData(params.id);
  console.log(single);
  return (
    <div>
      <Image
        width={230}
        height={345}
        src={single.data.movie.medium_cover_image}
      />
      <h3>{single.data.movie.title}</h3>
      <h4>{single.data.movie.rating}</h4>
      <p>{single.data.movie.description_intro}</p>
    </div>
  );
};

export default page;
