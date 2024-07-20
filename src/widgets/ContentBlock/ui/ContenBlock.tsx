import { FC } from 'react';
import classes from './ContentBlock.module.scss';
import { ContentBlockProps } from '../types/types';
import { TextSlice } from '@/shared/ui';
import { GalleryImage } from '@/shared/ui';


const ContentBlock: FC<Partial<ContentBlockProps>> = (props) => {
  return (
    <div className={
      classes.contentBlock 
    }>
      {props.header && 
        <div className={classes.contentBlock__container}>
          <TextSlice size={'normal'} align={'center'}>
            {props.header}
          </TextSlice>
        </div>
      }

      {props.image_title 
        ?
        props.image_src  &&
        <div className={classes.contentBlock__container_image}>
          <GalleryImage src={props.image_src} title={props.image_title} alt={props.image_alt}/>
        </div>
        :
        props.image_src  &&
        <div className={classes.contentBlock__container_image}>
          <GalleryImage src={props.image_src} alt={props.image_alt}/>
        </div>
      }

      {props.text &&
        <div className={classes.contentBlock__container}>
          <TextSlice size={'extra_small'} indent={'normal_indent'}>
            {props.text}
          </TextSlice>
        </div>
      }

      {props.children}
    </div>
  );
};

export default ContentBlock;