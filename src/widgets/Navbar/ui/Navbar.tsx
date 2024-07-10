import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <Link to={'/main'}>Главная</Link>
        <Link to={'/newtours'}>Открытия сезона</Link>
        <Link to={'/hottours'}>Горячие туры</Link>
        <Link to={'/prices'}>Калькулятор цен</Link>
        <Link to={'/about'}>О нас</Link>
      </div>
    </div>
  );
};

export default Navbar;