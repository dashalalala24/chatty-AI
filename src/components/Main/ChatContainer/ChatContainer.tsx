import { FC } from 'react';
import './ChatContainer.css';
import Chat from '../Chat/Chat';
import WaveAnimation from '../WaveAnimation/WaveAnimation';

const ChatContainer: FC = () => {
  return (
    <section className='chatContainer'>
      <Chat />
      <WaveAnimation />
    </section>
  );
}

export default ChatContainer;
