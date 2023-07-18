import Link from "next/link";
import React from "react";

const Pagination = ({ pageNumbers, currentPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center gap-5 md:gap-8 md:text-xl">
      {currentPage - 1 >= 1 && (
        <>
          <Link
            className="hover:text-green-400"
            href={`/?page=${currentPage - 1}`}
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
          href={`/?page=${page}`}
        >
          {page}
        </Link>
      ))}
      {currentPage + 1 <= totalPages && (
        <>
          <Link
            className="hover:text-green-400"
            href={`/?page=${currentPage + 1}`}
          >
            {">>"}
          </Link>
        </>
      )}
    </div>
  );
};

export default Pagination;
