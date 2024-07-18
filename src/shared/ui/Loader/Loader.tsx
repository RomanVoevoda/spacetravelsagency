import { FC } from 'react';
import classes from './Loader.module.scss';


const Loader: FC = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.loader__container}>
        <div className={classes.loader__div}></div>
        <div className={classes.loader__stub}></div> 
      </div>
    </div>
  );
};

export default Loader;