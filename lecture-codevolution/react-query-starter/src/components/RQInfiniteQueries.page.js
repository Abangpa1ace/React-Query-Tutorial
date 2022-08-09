import React, { Fragment } from 'react'
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

const RQInfiniteQueriesPage = () => {
  const { isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
    'colors', 
    fetchColors, 
    { 
      getNextPageParam: (lastPage, pages) => {
        return pages.length < 5 ? pages.length + 1 : undefined
      }
    }
  );
  if (isLoading) return <h2>Loading...!!</h2>;
  if (isError) return <h2>{error.message}</h2>;
  console.log(data);
  return (
    <>
      <div>
      {data?.pages.map((group, index) => (
        <Fragment key={index}>
          {group.data.map(color => (
            <h2 key={color.id}>
              {color.id}. {color.label}
            </h2>
          ))}
        </Fragment>
      ))}
      </div>
      <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>more</button>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching..' : 'none'}</div>
    </>
  )
}

export default RQInfiniteQueriesPage