import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetch = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const useSuperHeroQuery = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroId], fetch, {
    initialData: () => {
      const hero = queryClient.getQueryData("super-heroes")?.data?.[0] || null;
      return hero ? { data: hero } : undefined;
    },
  });
};
