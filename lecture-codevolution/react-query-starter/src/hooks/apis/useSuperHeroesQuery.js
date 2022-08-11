import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { request } from "../../utils/axiosUtils";

const fetchSuperHeroes = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({ url: '/superheroes' })
};

export const useSuperHeroesQuery = ({ onSuccess, onError }) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    staleTime: 30000,
    onSuccess,
    onError,
  });
};

const fetchAddSuperHero = (hero) => {
  // return axios.post("http://localhost:4000/superheroes", hero)
  return request({ url: '/superheroes', method: 'post', data: hero })
}

export const useAddSuperHeroMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(fetchAddSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries('super-heroes')
      queryClient.setQueryData('super-heroes', (prevData) => ({ ...prevData, data: [...prevData.data, data.data] }))
    },
    onMutate: async (newHero) => {
      await queryClient.cancelQueries('super-heroes')
      const prevHeroes = queryClient.getQueryData('super-heroes')
      queryClient.setQueryData('super-heroes', (prevData) => {
        return { ...prevData, data: [...prevData.data, { id: prevData?.data?.length, ...newHero }] }
      })
      return { prevHeroes }
    },
    onError: (error, payload, context) => {
      queryClient.setQueryData('super-heroes', context.prevHeroes)
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes')
    },
  }) 
}
