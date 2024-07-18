import { FC, useEffect, useState } from 'react';
import { fetchMainImage } from '../api/fetchMainImage';
import { apiKey } from '@/shared/api';
import classes from './MainImage.module.scss';
import { MainImageData } from '../types/types';
import { GalleryImage } from '@/entities';
import { useFetching } from '@/shared/lib';
import Loader from '@/shared/ui/Loader/Loader';

const MainImage: FC = () =>  {
  const [data, setData] = useState<MainImageData | undefined>(undefined);

  const [fetchImage, isImageLoading, LoadingError] = useFetching( async () => {
    await fetchMainImage(apiKey, setData);
  })

  useEffect( () => {
    fetchImage();
  }, []);
  
  return (
    <div className={classes.mainImage}>   
      {isImageLoading &&
        <Loader />
      }

      {LoadingError &&
        <h1>Произошла ошибка загрузки изображения</h1>
      }

      <GalleryImage
        src={
          (data && data.hdurl) 
          ? 
          data.hdurl 
          : 
          'https://i.imgur.com/unAY5wa.png'
        }
        alt={'Изображение дня'}
        title={
          (data && data.hdurl) 
          ? 
          data.title 
          : 
          ''
        }
      />
    </div>
  );
};

export default MainImage;