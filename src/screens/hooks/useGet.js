/*
Este fue uno de nuestros traspies al momento de configurar la API. 
Se usó GET en esta oportunidad, intentando captar n cantidad de resultados y no funcionó
por lo que luego se utilizó el método GET 



import { useEffect, useState } from "react";

const apiurl = "https://www.omdbapi.com/?i=${endpoint}&apikey=c947d3c4";

export const useGet = (endpoint) => {
    const [data, setData] = useState([]);

    const [isLoading, setLoading] = useState(false);

    const [error, setError] = useState(false);

    const getData = async (endpoint) => {
      setLoading(true);

      try {
        const res = await fetch(endpoint);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => setLoading(false, 1000));
      }
    };

    useEffect(() => {
      getData(endpoint);
    }, [endpoint]);

    return [data, isLoading, error];
  };
*/