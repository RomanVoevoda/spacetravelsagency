import { Footer, Header, Navbar } from '@/widgets'
import { FC, useState } from 'react'
import classes from './HotTours.module.scss';

const HotTours: FC = () => {
  const [navbarState, setNavbarState] = useState<'open' | 'closed'>('open');

  const changeNavbarState = (value: 'open' | 'closed') => {
    setNavbarState(value);
  }
  
  return (
    <div className={classes.hottours}>
      <Header openNavbar={changeNavbarState}/>
      <Navbar navbarState={navbarState} closeNavbar={changeNavbarState}/>
      <Footer />
    </div>
  );
}

export default HotTours