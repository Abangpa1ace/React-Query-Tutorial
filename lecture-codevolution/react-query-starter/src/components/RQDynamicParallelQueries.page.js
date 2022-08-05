import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const RQDynamicParallelQueriesPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((heroId) => ({
      queryKey: ["super-hero", heroId],
      queryFn: () => fetchSuperHero(heroId),
    }))
  );
  console.log("res", queryResults);
  return <div>RQParallelQueries.page</div>;
};

export default RQDynamicParallelQueriesPage;
