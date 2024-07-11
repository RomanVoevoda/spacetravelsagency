import { Footer, Header, Navbar } from '@/widgets';
import { FC } from 'react';
import classes from './About.module.scss';

const About: FC = () => {
  return (
    <div className={classes.about}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  )
};

export default About;