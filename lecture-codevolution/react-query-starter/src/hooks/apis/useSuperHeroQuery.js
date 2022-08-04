import { useQuery } from "react-query";
import axios from "axios";

// const fetch = (id) => {
//   return axios.get(`http://localhost:4000/superheroes/${id}`);
// };

const fetch = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const useSuperHeroQuery = (heroId) => {
  return useQuery(["super-hero", heroId], fetch, {
    staleTime: Infinity,
    select: (data) => data?.data,
  });
};
