import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroQuery } from "../hooks/apis/useSuperHeroQuery";

export const RQSuperHeroDetailPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroQuery(heroId);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.alterEgo}</p>
    </div>
  );
};
