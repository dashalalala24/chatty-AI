import './Main.css';
import ChatContainer from './ChatContainer/ChatContainer';
import Sidebar from './Sidebar/Sidebar';

function Main() {
  return (
    <main className='main' >
      <>
        <ChatContainer />
        <Sidebar />
      </>
    </main>
  );
}

export default Main;
