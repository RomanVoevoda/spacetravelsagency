import { Footer, Header, Navbar } from '@/widgets'
import { FC } from 'react'
import classes from './HotTours.module.scss';

const HotTours: FC = () => {
  return (
    <div className={classes.hottours}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  )
}

export default HotTours