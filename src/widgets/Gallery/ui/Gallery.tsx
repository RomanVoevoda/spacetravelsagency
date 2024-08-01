import classes from './Gallery.module.scss';

import { FC, useEffect, useState } from 'react';
import { apiKey, ApiService } from '@/shared/api';
import { imageData } from '../types/types';
import { GalleryImage, TextSlice } from '@/shared/ui';
import { useFetching } from '@/shared/lib';

import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButton, Loader } from '@/shared/ui';

interface GalleryProps {
  title: string
}

const Gallery: FC<GalleryProps> = ({title}) => {
  const [images, setImages] = useState<imageData[]>([]);

  const [fetchImages, isImagesLoading, LoadingError] = useFetching( async () => {
    await ApiService.fetchMarsImages(apiKey, setImages);
  })

  useEffect(() => {
    fetchImages();
  }, [])

  return (
    <div className={classes.gallery}>
      <TextSlice size={'extra_small'} align={'center'}>
        {title}
      </TextSlice>

      {isImagesLoading && images.length < 24 &&
        <Loader />
      }

      {LoadingError &&
        <h1 className={classes.gallery__title}>
          Произошла ошибка загрузки изображений
        </h1>
      }

      {images.length > 0 &&
        <Swiper 
          className={classes.gallery__track}
          modules={[A11y]}
          spaceBetween={0}
          slidesPerGroup={1}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          loop={true}
          speed={100}
        >

          <SwiperButton direction={'left'} speed={100}/>

          {images.map(image => (
            <SwiperSlide
              className={         
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
      }
    </div>
  );
};

export default Gallery;