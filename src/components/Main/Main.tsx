import './Main.css';
import { FC } from 'react';
import ChatContainer from './ChatContainer/ChatContainer';
import Sidebar from './Sidebar/Sidebar';

const Main: FC = () => {
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
