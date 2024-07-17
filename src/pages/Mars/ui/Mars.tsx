import { FC } from 'react'
import classes from './Mars.module.scss';
import { Gallery } from '@/widgets';

const Mars: FC = () => {
  return (
    <main className={classes.mars}>
      <Gallery title={'Горячие изображения с Марса'}/>
    </main>
  );
};

export default Mars;