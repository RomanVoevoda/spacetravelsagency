import { useEffect, useState } from 'react';
import { fetchMainImage } from '../api/fetchMainImage';
import { apiKey } from '@/shared/api';
import classes from './MainImage.module.scss';
import { MainImageData } from '../types/types';

const MainImage = () => {
  const [data, setData] = useState<MainImageData | undefined>(undefined);

  useEffect( () => {
    fetchMainImage(apiKey, setData);
  }, []);
  
  return (
    <div className={classes.mainImage}>
      <img 
        src={
          (data) 
          ? 
          data.hdurl 
          : 
          'ошибка загрузки изображения'
        }
        alt={'Изображение дня'}
        className={classes.mainImage__image}
      >
        
      </img>
      <p className={classes.mainImage__paragraph}>
        {(data) ? data.title : 'Ошибка загрузки'}
      </p>
    </div>
  );
};

export default MainImage;