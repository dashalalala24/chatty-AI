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
        {/* <h3 className='sidebar__history-subtitle'>Запросов пока нет</h3> */}
        <p className='sidebar__date'>23.07.2023</p>

        <div className='sidebar__message'>
          <p className='sidebar__text'>Как зарегистрировать право собственности на новую квартиру в РФ?</p>
        </div>

        <div className='sidebar__message'>
          <p className='sidebar__text'>Как узаконить перепланировку если площадь
          ванной комнаты была увеличена за счет коридора в России?</p>
          <button className='sidebar__basket-button'/>
        </div>

        <div className='sidebar__message'>
          <p className='sidebar__text'>Как узаконить перепланировку если площадь ванной комнаты
          была увеличена за счет коридора в России?</p>
        </div>

        <p className='sidebar__date'>19.07.2023</p>

        <div className='sidebar__message'>
          <p className='sidebar__text'>Как зарегистрировать право собственности на новую квартиру в РФ?</p>
        </div>

        <div className='sidebar__message'>
          <p className='sidebar__text'>Как узаконить перепланировку если площадь
          ванной комнаты была увеличена за счет коридора в России?</p>
        </div>

        <div className='sidebar__message'>
          <p className='sidebar__text'>Как узаконить перепланировку если площадь ванной комнаты
          была увеличена за счет коридора в России?</p>
        </div>

      </section>
      <button className='sidebar__newchat-button'>Новый чат</button>
    </section>
  );
}

export default Sidebar;
