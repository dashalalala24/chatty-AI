import './App.css';
import record from './utils/MediaStream';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Chatty AI</header>
      <h1>Record Your Voice</h1>
      <div>
        <button className='app__record-button' type='button' onClick={record} id='record-button' />
      </div>
    </div>
  );
}

export default App;
