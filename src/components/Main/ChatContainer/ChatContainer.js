import './ChatContainer.css';
import Chat from '../Chat/Chat';
import WaveAnimation from '../WaveAnimation/WaveAnimation';

function ChatContainer() {
  return (
    <section className='chatContainer'>
      <Chat />
      <WaveAnimation />
    </section>
  );
}

export default ChatContainer;
