import { Footer, Header, Navbar } from '@/widgets'
import { FC } from 'react'
import classes from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  )
}

export default Main