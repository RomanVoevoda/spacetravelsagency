import { Footer, Header, Navbar } from '@/widgets'
import { FC, useState } from 'react'
import classes from './Main.module.scss';

const Main: FC = () => {
  const [navbarState, setNavbarState] = useState<'open' | 'closed'>('open');

  const changeNavbarState = (value: 'open' | 'closed') => {
    setNavbarState(value);
  }
  
  return (
    <div className={classes.main}>
      <Header openNavbar={changeNavbarState}/>
      <Navbar navbarState={navbarState} closeNavbar={changeNavbarState}/>
      <Footer />
    </div>
  );
}

export default Main