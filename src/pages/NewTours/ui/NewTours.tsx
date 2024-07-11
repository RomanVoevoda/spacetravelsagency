import { Footer, Header, Navbar } from '@/widgets'
import { FC } from 'react'
import classes from './NewTours.module.scss';

const NewTours: FC = () => {
  return (
    <div className={classes.newtours}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  )
}

export default NewTours