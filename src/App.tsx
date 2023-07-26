import "./App.css";
import { FC } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App: FC = () => {
  return (
    <div className="App">
      <>
        <Header />
        <Main />
      </>
    </div>
  );
};

export default App;
