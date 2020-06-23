import getData from "../../../services/api";
import Dashboard from "../Dashboard";
import style from "./App.module.css";
import Loader from "react-loader-spinner";
import { CSSTransition } from "react-transition-group";
import './anime.css'

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsActive(true)

    getData()
      .then(({ data }) => setData(data))
      .catch((error) => setError(!!error))
      .finally(() => {
        setIsLoading(false)
      });
  }, []);

  return (
    <div className={style.wrapper}>
      <CSSTransition timeout={500} in={isActive} classNames='logo'>
        <h1 className={style.title} >Instasport</h1>
      </CSSTransition>
      {isError && <div>Error!!! Please reload the page!</div>}
      {isLoading && (
        <Loader
          className={style.spiner}
          type="ThreeDots"
          color="#00BFFF"
          height={50}
          width={50}
        />
      )}
      <Dashboard data={data} />
    </div>
  );
};

export default App;
