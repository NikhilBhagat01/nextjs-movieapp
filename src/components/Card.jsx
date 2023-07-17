import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ movie }) => {
  return (
    <Link
      href={`/search/${movie.id}`}
      className=" border-4 border-transparent   transition-all duration-300	ease-in hover:border-4 hover:border-[#6ac045]"
    >
      <img width="100%" src={movie.medium_cover_image} alt="poster" />
      <h3 className="text-white px-4 mt-2 font-bold">{movie.title}</h3>
      <p className="px-4 pb-2 text-[#79898a]">{movie.year}</p>
    </Link>
  );
};

export default Card;
