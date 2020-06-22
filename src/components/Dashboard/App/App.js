import getData from "../../../services/api";
import Dashboard from "../Dashboard";
import style from './App.module.css'
import Loader from "react-loader-spinner";

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then(({ data }) => setData(data))
      .catch((error) => setError(!!error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 className={style.title}>Instasport</h1>

      {isError && <div>Error!!! Please reload the page!</div>}
      {isLoading && (
        <Loader className={style.spiner} type="ThreeDots" color="#00BFFF" height={50} width={50} />
      )}
      <Dashboard data={data} />
    </div>
  );
};

export default App;
