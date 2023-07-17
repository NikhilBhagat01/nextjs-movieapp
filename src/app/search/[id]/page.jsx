async function getData(id) {
  const res = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_cast=true`,
    { cache: "no-cache" }
  );

  return res.json();
}

const page = async ({ params }) => {
  const single = await getData(params.id);
  console.log(single);
  return (
    <div className="flex flex-col gap-8 md:flex-row text-white">
      <div className="w-full md:w-[26%]">
        <img src={single.data.movie.medium_cover_image} alt="poster" />
      </div>
      <div className="w-full md:max-w-2xl flex  flex-col gap-4">
        <h3 className="text-white text-4xl">{single.data.movie.title}</h3>
        <h4>
          <span className="mr-2 font-bold text-xl">Rating :</span>
          {single.data.movie.rating}
        </h4>
        <p>
          <span className="mr-2 font-bold text-xl">plot :</span>
          {single.data.movie.description_intro}
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          {single.data.movie.cast.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2 ">
              {
                <>
                  <img
                    className="rounded-full w-16 h-16"
                    src={c.url_small_image}
                  />
                  <p className="text-[#91918d]">{c.name}</p>
                </>
              }
            </div>
          ))}
        </div>
        <div className="flex items-center  gap-3">
          {single.data.movie.torrents.map((torrent) => (
            <a
              key={torrent.url}
              className="p-2 bg-[#32323a] transition-all duration-300 rounded-md text-white hover:bg-[#6ac045]"
              href={torrent.url}
            >
              {`${torrent.quality} ${torrent.type}`}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
