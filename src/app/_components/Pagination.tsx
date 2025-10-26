"use client";

import { cva, cx } from "class-variance-authority";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const buttonStyles = cva(
  "rounded-2xl w-10 h-10 flex items-center justify-center  disabled:cursor-not-allowed disabled:text-desactivated-stoke",
  {
    variants: {
      isActive: {
        true: "bg-button-primary text-white",
        false: "text-desactivated",
      },
    },
  }
);

const ArrowSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
    >
      <path
        d="M4.48333 0.75L0.75 4.48333L4.48333 8.21667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 4.48334H12.6833"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={buttonStyles({ isActive: false })}
        >
          <ArrowSvg />
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          page => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={buttonStyles({ isActive: page === currentPage })}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={cx("rotate-180", buttonStyles({ isActive: false }))}
        >
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
}
