import { useEffect, useState } from "react";
import "./Data.css";

type DataProps = {
  hasError: boolean;
};

function Data({ hasError }: DataProps) {
  const [data, setData] = useState("");

  async function fetchData(hasError: boolean) {
    try {
      const resFetch = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
      const res = await resFetch.json();
      if (hasError) {
        setData(res);
      } else {
        setData(res["results"][0]["name"]);
      }
    } catch (error) {
      throw new Error("error");
    }
  }

  useEffect(() => {
    fetchData(hasError);
  }, [hasError]);

  return <div className="card">First Pokemon : {data}</div>;
}

export default Data;
