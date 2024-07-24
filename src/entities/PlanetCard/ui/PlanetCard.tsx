import { FlexDiv, GalleryImage, TextSlice } from '@/shared/ui';
import { FC } from 'react';
import classes from './PlanetCard.module.scss';

interface PlanetCardProps {
  title: string;
  image_src?: string;
  score?: number;
  onClick?: () => void;
}

const PlanetCard: FC<PlanetCardProps> = (props) => {
  /*Здесь можно было бы использовать паттерн фабрика,но */
  return (
    <article className={classes.card} onClick={props.onClick}>
      <TextSlice size={'smallest'} align={'center'}>{props.title}</TextSlice>
      
      <div className={classes.card__image_container}>
        <GalleryImage src={props.image_src} alt={props.title} />
      </div>
      {props.score &&
        <div className={classes.card__info_container}>
          <TextSlice size={'smallest'} align={'start'}>Размер:</TextSlice>
          <FlexDiv direction={'row_reverse'}>
            <TextSlice size={'smallest'} align={'end'}>{props.score}</TextSlice>
          </FlexDiv>
        </div>
      }
    </article>
  );
};

export default PlanetCard;