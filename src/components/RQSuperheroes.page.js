import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const RQSuperheroesPage = () => {
  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <>
      <div>RQ Super heroes Page</div>
      {data?.data.map((superhero) => {
        return (
          <div key={superhero.id}>
            <p>{superhero.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default RQSuperheroesPage;
