import React from "react";
import classes from "./App.module.scss";

import { Main } from "./components/Main/Main";

const App = () => (
  <div className={classes.app}>
    <Main />
  </div>
);

export default App;
