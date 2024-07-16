import { Footer, Header, Navbar } from '@/widgets';
import { FC, ReactNode, useState } from 'react';
import classes from './Layout.module.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  const [navbarState, setNavbarState] = useState<'open' | 'closed'>('closed');

  const changeNavbarState = (value: 'open' | 'closed') => {
    setNavbarState(value);
  }
  
  return (
    <div className={classes.layout}>
      <Header openNavbar={changeNavbarState}/>
      <Navbar navbarState={navbarState} closeNavbar={changeNavbarState}/>
        {children}
      <Footer />
    </div>
  );
};

export default Layout;