import { FC, useEffect, useState } from 'react';
import classes from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FlexDiv } from '@/shared/ui';
import { apiKey, ApiService } from '@/shared/api';
import { imageData } from '../types/types';
import { GalleryImage } from '@/entities';

interface GalleryProps {
  title: string
}

const Gallery: FC<GalleryProps> = ({title}) => {
  const [images, setImages] = useState<imageData[]>([]);

  useEffect(() => {
    ApiService.fetchMarsImages(apiKey, setImages);
  }, [])

  return (
    <div className={classes.gallery}>
      <p className={classes.gallery__title}>
        {title}
      </p>    

      <FlexDiv align={'center'} justify={'center'}>
        <FontAwesomeIcon icon={faAngleLeft} className={classes.gallery__button}/>

        <div className={classes.gallery__container}>
          {images.map(image => (
            <GalleryImage 
              src={image.img_src} 
              alt={'Изображение галереи'}
              key={image.id}
            />
          ))}
        </div>

        <FontAwesomeIcon icon={faAngleRight} className={classes.gallery__button}/>
      </FlexDiv>         
    </div>
  );
};

export default Gallery;