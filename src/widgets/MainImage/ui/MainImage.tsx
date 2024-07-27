import { FC, useEffect, useState } from 'react';
import { fetchMainImage } from '../api/fetchMainImage';
import { apiKey } from '@/shared/api';
import classes from './MainImage.module.scss';
import { MainImageData } from '../types/types';
import { GalleryImage } from '@/shared/ui';
import { useFetching } from '@/shared/lib';
import { Loader } from '@/shared/ui';

const MainImage: FC = () =>  {
  const [data, setData] = useState<MainImageData | undefined>(undefined);

  const [fetchImage, isImageLoading] = useFetching( async () => {
    await fetchMainImage(apiKey, setData);
  })

  useEffect( () => {
    fetchImage();
  }, []);
  
  return (
    <div className={classes.mainImage}>   
      {!data && isImageLoading && 
        <Loader />
      }

      <GalleryImage
        src={
          (data && data.media_type === 'image') 
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