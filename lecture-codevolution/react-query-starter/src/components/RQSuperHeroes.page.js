import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Data Fetching Success!", data);
  };

  const onError = (error) => {
    console.log("Data Fetching Fail..", error);
  };

  const { isLoading, data, isError, error, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      enabled: false,
      staleTime: 30000,
      onSuccess,
      onError,
    }
  );

  if (isLoading) return <h2>Loading...!!</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>refresh</button>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};
