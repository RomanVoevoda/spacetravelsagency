import { FC } from 'react'
import classes from './Mars.module.scss';
import { Gallery } from '@/widgets';
import { FlexDiv } from '@/shared/ui';

const Mars: FC = () => {
  return (
    <FlexDiv direction={'column'} align={'center'}>
      <Gallery title={'Горячие изображения с Марса'}/>
    </FlexDiv>
  );
};

export default Mars;