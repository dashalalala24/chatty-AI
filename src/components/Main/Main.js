import './Main.css';
import ChatContainer from './ChatContainer/ChatContainer';
import WaveAnimation from './WaveAnimation/WaveAnimation';
import Sidebar from './Sidebar/Sidebar';

function Main() {
  return (
    <main className='main' >
      <>
        <ChatContainer />
        <WaveAnimation />
      </>
        <Sidebar />
    </main>
  );
}

export default Main;
