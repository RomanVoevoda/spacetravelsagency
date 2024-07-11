import { Footer, Header, Navbar } from '@/widgets';
import { FC } from 'react';
import classes from './PriceCalculator.module.scss';

const PriceCalculator: FC = () => {
  return (
    <div className={classes.calculator}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
};

export default PriceCalculator;