import React, { useState, useEffect } from "react";

import RoutesPrivate from "./Components/RoutesPrivate";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [loadding, setLoadding] = useState(true);


  return (
    <div className="App">
     <RoutesPrivate/>
    </div>
  );
};


export default App;
