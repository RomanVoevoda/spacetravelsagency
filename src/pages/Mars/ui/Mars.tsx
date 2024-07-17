import { FC } from 'react'
import classes from './Mars.module.scss';
import { Gallery } from '@/widgets';
import { SunSpan, SvgClouds } from '@/shared/ui';

const Mars: FC = () => {
  return (
    <main className={classes.mars}>
      <Gallery title={'Горячие изображения с Марса'}/>
      <SvgClouds position={'left'}/>
      <SvgClouds position={'center'}/>
      <SvgClouds position={'right'}/>
      <SunSpan />
    </main>
  );
};

export default Mars;