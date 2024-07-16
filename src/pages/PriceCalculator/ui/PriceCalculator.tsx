import { Footer, Header, Navbar } from '@/widgets';
import { FC, useState } from 'react';
import classes from './PriceCalculator.module.scss';

const PriceCalculator: FC = () => {
  const [navbarState, setNavbarState] = useState<'open' | 'closed'>('open');

  const changeNavbarState = (value: 'open' | 'closed') => {
    setNavbarState(value);
  }
  
  return (
    <div className={classes.calculator}>
      <Header openNavbar={changeNavbarState}/>
      <Navbar navbarState={navbarState} closeNavbar={changeNavbarState}/>
      <Footer />
    </div>
  );
};

export default PriceCalculator;