import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react'
import { useSwiper } from 'swiper/react';
import classes from './SwiperButton.module.scss';

interface SwiperButtonProps {
  direction: 'right' | 'left';
  speed: number;
}

const SwiperButton: FC<SwiperButtonProps> = ({direction, speed}) => {
  const swiper = useSwiper();

  return (
    (direction === 'right')
    ?
    <FontAwesomeIcon 
      icon={faAngleRight} 
      className={
        classes.button
        +
        ' '
        +
        classes.button_right
      }
      onClick={() => swiper.slideNext(speed)}
    />
    :
    <FontAwesomeIcon 
      icon={faAngleLeft} 
      className={
        classes.button
        +
        ' '
        +
        classes.button_left
      }
      onClick={() => swiper.slidePrev(speed)}
    />
  )
}

export default SwiperButton