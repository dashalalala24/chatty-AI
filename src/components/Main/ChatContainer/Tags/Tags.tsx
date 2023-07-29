import { FC } from 'react';
import './Tags.css';

const tags: any = [
  'Шаблон соглашения о неразглашении',
  'Элементы договора аренды',
  'Регистрация товарного знака',
  'Как узаконить планировку'
  ]

const Tags:FC = () => {
  return (
    <div className='tags__container' >
      {(tags.length !== 0) ? (
        tags?.map((tagText: any, index: any) => {
          return (
            <div className='tags__message' key={index}>
              <p className='tags__text'>{tagText}</p>
            </div>
          )
        })
      ) : (
        null
      )}
      <button className='tags__button'></button>
    </div>
  );
}

export default Tags;