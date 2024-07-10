import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <div className={classes.navbar}>
      <Link className={classes.navbar__link} to={'/main'}>Главная</Link>
      <Link className={classes.navbar__link} to={'/newtours'}>Открытия сезона</Link>
      <Link className={classes.navbar__link} to={'/hottours'}>Горячие туры</Link>
      <Link className={classes.navbar__link} to={'/prices'}>Калькулятор цен</Link>
      <Link className={classes.navbar__link} to={'/about'}>О нас</Link>
    </div>
  );
};

export default Navbar;