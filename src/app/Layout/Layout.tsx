import { Footer, Header, Navbar } from '@/widgets';
import { FC, ReactNode, useState } from 'react';
import classes from './Layout.module.scss';
import MainImage from '@/widgets/MainImage/ui/MainImage';

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
      <MainImage />
      <Navbar navbarState={navbarState} closeNavbar={changeNavbarState}/>
        {children}
      <Footer />
    </div>
  );
};

export default Layout;