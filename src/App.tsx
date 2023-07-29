import { FC, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import { CurrentUserContext } from "./contexts/CurrentUserContext";

const App: FC = () => {
  // const [loggedIn, setIsLoggedIn] = useState();
  // const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="App">
      {/* <CurrentUserContext.Provider value={isRecording}> */}
        <>
          <Header />
          <Main />
        </>
      {/* </CurrentUserContext.Provider> */}
    </div>
  );
};

export default App;
