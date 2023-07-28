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
        tags?.map((tagText: any) => {
          return (
            <div className='tags__message'>
              <p className='tags__text'>{tagText}</p>
            </div>
          )
        })
      ) : (
        null
      )}
    </div>
  );
}

export default Tags;
