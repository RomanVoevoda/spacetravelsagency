import { FC, useEffect, useState } from 'react';
import { fetchMainImage } from '../api/fetchMainImage';
import { apiKey } from '@/shared/api';
import classes from './MainImage.module.scss';
import { MainImageData } from '../types/types';
import { GalleryImage } from '@/entities';

const MainImage: FC = () => {
  const [data, setData] = useState<MainImageData | undefined>(undefined);

  useEffect( () => {
    fetchMainImage(apiKey, setData);
  }, []);
  
  return (
    <div className={classes.mainImage}>
      <GalleryImage
        src={
          (data) 
          ? 
          data.hdurl 
          : 
          'ошибка загрузки изображения'
        }
        alt={'Изображение дня'}
        title={(data) ? data.title : 'Ошибка загрузки'}
      />
    </div>
  );
};

export default MainImage;