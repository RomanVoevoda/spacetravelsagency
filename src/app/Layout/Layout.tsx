import { Footer, Header, Navbar } from '@/widgets';
import { FC, Suspense, useState } from 'react';
import classes from './Layout.module.scss';
import { MainImage } from '@/widgets';
import { stopScrolling } from '@/shared/lib';
import { Outlet } from 'react-router-dom';
import { Modal, SunSpan, SvgClouds } from '@/shared/ui';
import Loader from '@/shared/ui/Loader/Loader';

const Layout: FC = () => {
  const [navbarState, setNavbarState] = useState<'open' | 'closed'>('closed');

  const changeNavbarState = (value: 'open' | 'closed') => {
    setNavbarState(value);
    stopScrolling();
  }

  return (
    <div className={classes.layout}>
      <Header openNavbar={changeNavbarState}/>
      <MainImage />
      <Navbar navbarState={navbarState} closeNavbar={changeNavbarState}/>

      <main className={classes.layout__container}>
        <Suspense fallback={
          <Modal>
            <Loader />
          </Modal> 
        }>
          <Outlet />
        </Suspense>
        
        <SvgClouds position={'left'}/>
        <SvgClouds position={'center'}/>
        <SvgClouds position={'right'}/>
        <SunSpan />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;