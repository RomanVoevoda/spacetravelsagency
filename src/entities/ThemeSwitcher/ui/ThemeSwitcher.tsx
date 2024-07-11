import React, { FC, useContext } from 'react';
import classes from './ThemeSwitcher.module.scss';
import { changeColorsTheme } from '../lib/helpers/changeColorsTheme';
import { useColorsTheme } from '../lib/hooks/useColorsTheme';

const ThemeSwitcher: FC = () => {
  const { colorsTheme, setColorsTheme } = useColorsTheme();

  return (
    <div onClick={() => changeColorsTheme(colorsTheme, setColorsTheme)}>blblbl</div>
  );
};

export default ThemeSwitcher;