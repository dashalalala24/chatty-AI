import { FC } from 'react';
import './Sidebar.css';

const Sidebar: FC = () => {
  return (
    <section className='sidebar'>
      <div className='sidebar__nav'>
        <h2 className='sidebar__subtitle'>История</h2>
        <button className='sidebar__search-button'></button>
      </div>
      <section className='sidebar__history-container'>
        <h3 className='sidebar__history-subtitle'>Запросов пока нет</h3>
      </section>
      <button className='sidebar__newchat-button'>Новый чат</button>
    </section>
  );
}

export default Sidebar;
