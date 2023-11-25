import React, { useEffect, useState } from "react";

import axios from "axios";

const SuperHeroesPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((superhero) => {
        return <div key={superhero.id}>{superhero.name}</div>;
      })}
    </>
  );
};

export default SuperHeroesPage;
