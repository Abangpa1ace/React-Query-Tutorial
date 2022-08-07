import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (page) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`);
};

const RQPaginatedQueryPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data } = useQuery(
    ["colors", page],
    () => fetchColors(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) return <h2>Loading...!!</h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <button onClick={() => setPage((prev) => prev - 1)}>-</button>
      <div>
        {data?.data.map((color) => (
          <h2 key={color.id}>
            {color.id}. {color.label}
          </h2>
        ))}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>+</button>
    </>
  );
};

export default RQPaginatedQueryPage;
