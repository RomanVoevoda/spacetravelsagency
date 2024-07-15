import { FC } from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar: FC = () => {
  return (
    window.innerWidth < 600

    ?

    <nav className={classes.navbar}>
      <FontAwesomeIcon icon={faXmark} className={classes.navbar__icon}/>

      <p className={classes.navbar__paragraph}>
        Space Travels Agency
      </p>

      <Link className={classes.navbar__button} to={'/main'}>Главная</Link>
      <Link className={classes.navbar__button} to={'/newtours'}>Открытия сезона</Link>
      <Link className={classes.navbar__button} to={'/hottours'}>Горячие туры</Link>
      <Link className={classes.navbar__button} to={'/prices'}>Калькулятор цен</Link>
      <Link className={classes.navbar__button} to={'/about'}>О нас</Link>
    </nav>

    :

    <nav className={classes.navbar}>
      <Link className={classes.navbar__button} to={'/main'}>Главная</Link>
      <Link className={classes.navbar__button} to={'/newtours'}>Открытия сезона</Link>
      <Link className={classes.navbar__button} to={'/hottours'}>Горячие туры</Link>
      <Link className={classes.navbar__button} to={'/prices'}>Калькулятор цен</Link>
      <Link className={classes.navbar__button} to={'/about'}>О нас</Link>
    </nav>
  );
};

export default Navbar;