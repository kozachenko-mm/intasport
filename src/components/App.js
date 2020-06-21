import getData from "../services/api";
import Dashboard from "./Dashboard/Dashboard";

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getData()
      .then(({ data }) => setData(data))
      .catch((error) => setError(!!error));
  }, []);

  return (
    <div>
      <Dashboard data={data} />
      {isError && <div>Error!!! Please reload the page!</div>}
    </div>
  );
}

export default App;
