import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const SortButton = () => {
  const {
    query: { category },
  } = useRouter();

  return (
    <ul className="flex flex-row ">
      <Link
        href={{
          pathname: `/shopping/${category}`,
          query: { sort: "des" },
        }}
        passHref
        scroll={false}
      >
        <a>
          <li className="inline-block translate-y-20 transition_300 hover:translate-y-10 hover:text-teal-600">
            <FiTrendingDown />
            価額
          </li>
        </a>
      </Link>
      <Link
        href={{
          pathname: `/shopping/${category}`,
          query: { sort: "asc" },
        }}
        passHref
        scroll={false}
      >
        <a>
          <li className="inline-block translate-y-20 transition_300 hover:translate-y-10 hover:text-teal-600">
            <FiTrendingUp />
            価額
          </li>
        </a>
      </Link>
    </ul>
  );
};

export default SortButton;
