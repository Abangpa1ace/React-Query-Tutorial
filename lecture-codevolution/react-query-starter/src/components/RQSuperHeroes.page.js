import { Link } from "react-router-dom";
import { useSuperHeroesQuery } from "../hooks/apis/useSuperHeroesQuery";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Data Fetching Success!", data);
  };

  const onError = (error) => {
    console.log("Data Fetching Fail..", error);
  };

  const { isLoading, data, isError, error, refetch } = useSuperHeroesQuery({
    onSuccess,
    onError,
  });

  if (isLoading) return <h2>Loading...!!</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>refresh</button>
      {data?.data.map((hero) => (
        <div key={hero.name}>
          <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
