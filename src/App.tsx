import "./App.css";
import Header from "./components/Header/Header";
import record from "./utils/MediaStream";

function App() {
  return (
    <div className="app">
      <Header />
      <h1>Record Your Voice</h1>
      <div>
        <button
          className="app__record-button"
          type="button"
          onClick={record}
          id="record-button"
        />
      </div>
    </div>
  );
}

export default App;
