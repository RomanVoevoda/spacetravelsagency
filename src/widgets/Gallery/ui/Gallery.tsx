import { FC, useEffect, useState } from 'react';
import classes from './Gallery.module.scss';
import { apiKey, ApiService } from '@/shared/api';
import { imageData } from '../types/types';
import { GalleryImage } from '@/entities';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/zoom';
import { SwiperButton } from '@/shared/ui';

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

      <Swiper 
        className={classes.gallery__track}
        modules={[A11y]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        scrollbar={{ draggable: true }}
        loop={true}
        zoom={true}
        speed={100}
      >

        <SwiperButton direction={'left'} speed={100}/>

        {images.map(image => (
          <SwiperSlide
            className={
              'swiper-zoom-container'
              +
              ' '
              +           
              classes.gallery__slide
            }
            key={image.id}
          >
            <GalleryImage 
              src={image.img_src} 
              alt={'Изображение галереи'}           
            />
          </SwiperSlide>
        ))}

        <SwiperButton direction={'right'} speed={100}/>
      </Swiper>
    </div>
  );
};

export default Gallery;