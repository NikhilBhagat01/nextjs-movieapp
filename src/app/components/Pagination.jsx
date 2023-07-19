import Link from "next/link";
import React from "react";

const Pagination = ({ pageNumbers, currentPage, totalPages, url }) => {
  return (
    <div className="flex items-center justify-center gap-5 md:gap-8 md:text-xl">
      {currentPage - 1 >= 1 && (
        <>
          <Link
            className="hover:text-green-400"
            href={`${url === "/" ? "?" : url + "&"}page=${currentPage - 1}`}
          >
            {"<<"}
          </Link>
        </>
      )}
      {pageNumbers.map((page) => (
        <Link
          className={
            page === currentPage
              ? "text-green-400 font-bold -translate-y-1 text-2xl"
              : "hover:text-green-400"
          }
          key={page}
          // href={`/?page=${page}`}
          href={`${url === "/" ? "?" : url + "&"}page=${page}`}
        >
          {page}
        </Link>
      ))}
      {currentPage + 1 <= totalPages && (
        <>
          <Link
            className="hover:text-green-400"
            href={`${url === "/" ? "?" : url + "&"}page=${currentPage + 1}`}
          >
            {">>"}
          </Link>
        </>
      )}
    </div>
  );
};

export default Pagination;
