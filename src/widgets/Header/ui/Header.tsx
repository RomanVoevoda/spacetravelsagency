import React, { FC } from 'react';
import classes from './Header.module.scss';
import { ThemeSwitcher } from '@/entities';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <p className={classes.header__paragraph}>Space Travels Agency</p>
      <div className={classes.header__container}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;