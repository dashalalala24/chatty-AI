import { FC } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
