import { useState } from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesQuery, useAddSuperHeroMutation } from "../hooks/apis/useSuperHeroesQuery";

export const RQSuperHeroesPage = () => {
  const [newHero, setNewHero] = useState({ name: "", alterEgo: "" });

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

  const { mutate: addHero, isLoading2, isError2, error2 } = useAddSuperHeroMutation(newHero)

  const handleClickAddButton = () => {
    addHero(newHero)
    setNewHero({ name: "", alterEgo: "" })
  }

  if (isLoading) return <h2>Loading...!!</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <input
          value={newHero.name}
          onChange={(e) =>
            setNewHero((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="name"
        />
        <input
          value={newHero.alterEgo}
          onChange={(e) =>
            setNewHero((prev) => ({ ...prev, alterEgo: e.target.value }))
          }
          placeholder="alterEgo"
        />
        <button onClick={handleClickAddButton}>Add Hero</button>
      </div>
      <button onClick={refetch}>refresh</button>
      {data?.data.map((hero) => (
        <div key={hero.name}>
          <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
