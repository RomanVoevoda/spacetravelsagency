import React, { FC } from 'react';
import classes from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <p className={classes.header__paragraph}>Space Travels Agency</p>
    </header>
  );
};

export default Header;